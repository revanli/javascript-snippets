'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @description 预加载js库，提前加载图片等资源，然后缓存进浏览器，浏览器遇到加载后的资源直接读取，从而实现预加载目的
 * @author liyufan@thejoyrun.com
 * @date 2017-12-21
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    //AMD
    define(factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    //Node, CommonJS
    module.exports = factory();
  } else {
    //浏览器全局变量(root 即 window)
    root.resLoader = factory(root);
  }
})(undefined, function () {

  // 构造函数
  function resLoader(resources, config) {
    var option = config || {};
    this.source = resources; // 资源路径数组
    this.count = 0; // 当前加载的资源数
    this.total = resources.length || 0; // 资源总数
    this.status = 0; // 加载器的状态，0: 未启动，1: 正在加载, 2: 加载完毕
    this.timer = null; // 计时器

    this.options = {
      baseImgUrl: './', // 基路径
      maxLoadTime: 4000, // 用户能忍受的最长加载时间
      onStart: null, // 加载开始回调函数, 传入参数total
      onProgress: null, // 正在加载回调函数，传入参数currentIndex, total
      onComplete: null // 加载完毕回调函数，传入参数total
    };

    for (var key in option) {
      this.options[key] = option[key];
    }

    this.init();
  }

  // 静态方法
  var isFunc = function isFunc(f) {
    return typeof f === 'function';
  };

  resLoader.prototype.init = function () {
    var self = this;
    this.status = 1;

    // 超时函数，超过预设时间后清除不再加载资源
    this.countDown();

    this.source.forEach(function (srcItem) {
      var fullSrc = '';

      if (this.options.baseImgUrl.indexOf('//') == 0) {
        fullSrc = this.options.baseImgUrl + srcItem;
      } else if (srcItem.indexOf('//') == 0) {
        fullSrc = window.location.protocol + srcItem;
      } else if (srcItem.indexOf('http://') == 0 || srcItem.indexOf('https://') == 0) {
        fullSrc = srcItem;
      } else {
        fullSrc = this.options.baseImgUrl + srcItem;
      }

      if (/jpg|gif|png|jpeg/i.test(srcItem)) {
        this.image.call(this, fullSrc);
      } else if (/css/i.test(srcItem)) {
        this.style.call(this, fullSrc);
      } else if (/js/i.test(srcItem)) {
        this.script.call(this, fullSrc);
      } else {
        console.log('不支持的文件格式', srcItem);
      }
    }.bind(this));

    if (isFunc(this.options.onStart)) {
      this.options.onStart(this.total);
    }
  };

  resLoader.prototype.image = function (src) {
    var image = document.createElement('img');
    this.load(image, src);
    image.src = src;
  };

  resLoader.prototype.style = function (src) {
    var styleSheet = document.createElement('link');
    this.load(styleSheet, src);
    styleSheet.rel = 'stylesheet';
    styleSheet.type = 'text/css';
    styleSheet.href = src;
    document.head.appendChild(styleSheet);
  };

  resLoader.prototype.script = function (src) {
    var script = document.createElement('script');
    this.load(script, src);
    script.type = 'text/javascript';
    script.src = src;
    document.head.appendChild(script);
  };

  resLoader.prototype.load = function (file, src) {
    var self = this;
    file.onload = file.onerror = file.onabort = function (file) {
      if (isFunc(this.options.onProgress)) {
        this.options.onProgress(++this.count, this.total);
      }

      // 加载完毕
      if (this.count == this.total) {
        if (isFunc(this.options.onComplete)) {
          this.options.onComplete(this.total);
          // 清除计时器
          window.clearTimeout(this.timer);
        }
      }
    }.bind(this);
  };

  resLoader.prototype.countDown = function () {
    this.timer = window.setTimeout(function () {
      if (isFunc(this.options.onComplete)) {
        this.options.onComplete(this.total);
      }
    }.bind(this), this.options.maxLoadTime);
  };

  // 返回公共方法
  return resLoader;
});