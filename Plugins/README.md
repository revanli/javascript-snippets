# resLoader.js
一个预加载资源的js插件

### 原理
在用户首次进入页面的时候发起资源请求，请求完资源后浏览器会自动缓存，
当页面要用到资源时，浏览器会检查是不是已经在缓存中，如果在，则直接用缓存的资源，不发送请求，或者由服务端返回304 notmodified(304只带请求头信息，不传输资源)。这样使用一张图片的时间会大大缩减，我们的页面看起来会非常流畅。在移动端，能避免页面出现白屏（等待加载图片）的情况，从而提升用户的体验。

### Features
- 预加载图片，格式支持jpg、gif、png、jpeg
- 预加载样式文件，加载完后插入到html的<head></head>内部
- 预加载js文件，加载完后插入到html的<head></head>内部

### Usage
#### 下载resLoader.js文件
#### 在script文件中
```
var loader = new resLoader([
  '/path/to/image1',
  '/path/to/image2'
], {
  baseUrl: './baseUrl',
  onStart: (total) => {
    console.time()
    console.log('start:' + total);
  },
  onProgress: (current, total) => {
    console.log(current + '/' + total);
  },
  onComplete: (total) => {
    console.log('加载完毕:' + total + '个资源');
    console.timeEnd()
  }
```

