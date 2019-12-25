# css 奇赢异巧

## 样式问题

### 1、父元素设置了border-radius，子元素应用了transform，并且父元素设置了overflow:hidden，但是却失效？
``` javascript
// 给父元素设置
{
    position:relative;
    z-index:1;
}
```

### 2、设置input 文本框的 placeholder 的颜色
```javascript
input::-webkit-input-placeholder{
    color:rgba(144,147,153,1);
}
```

### 3、如何设置body背景色，height:100%,不生效？
```javascript
同时设置html，body的高度

html,body{
    height:100%；
}
或
body{
  height: 100vh; // 代表占屏幕100%
}
```

### 4、一像素边框的问题
```javascript
.row {
  position: relative;
  &:after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    border-bottom:1px solid #e6e6e6;
    color: red;
    height: 200%;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    pointer-events: none; /* 防止点击触发 */
    box-sizing: border-box;
  }
}

```

### 5、css属性touch-action:none;
```javascript
该属性会导致安卓页面无法滚动，慎用!

```

### 6、去除ios 手机端input输入框的内阴影
```javascript
input{
    -webkit-appearance: none;
}

```

### 7、安卓手机端div里面在包一层div，文字展示不居中的问题。
```javascript
最好给div设置padding ，不固定高度和不设置line-height；
```

### 8、iOS端input输入框光标错位
是由于fixed定位引起的，改成absolute就解决了。
```javascript

.box{
    position: absolute;
}
```

### 9、div实现背景色和背景图片同时存在
```javascript
{
    background-color: #fff;
    background-image:url('../../assets/img/model-bg.png');
    background-repeat: no-repeat;
}

```
### 10、css 制作椭圆
border-radius可以单独设置水平和垂直的半径，只需要用一个斜杠（/）分隔这二个值就行。
```javascript
{
    width: 150px;
    height: 100px;
    border-radius: 50%/50%; //简写属性：border-radius:50%
    background: brown;
}
```

### 11、图片居中显示
```javascript
object-fit: cover;
```

## 兼容问题

### 1、iconfont 字体在钉钉应用里面加载不出来（或者是乱码）的问题引入iconfont字体的时候，需要按照顺序把字体依次引入。正确的顺序如下：
```javascript
@font-face {
    font-family: "djicon";
    src: url('./iconfont.eot'); /* IE9*/
    src: url('./iconfont.svg#iconfont') format('svg'), /* iOS 4.1- */
    url('./iconfont.woff') format('woff'), /* chrome、firefox */
    url('./iconfont.ttf') format('truetype'); /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
}
// 参考文档：https://www.cnblogs.com/Megasu/p/4305116.html
```
### 2、IOS 点击input不聚焦问题。
ios系统中点击Input输入框，没有反应，无法聚集光标，调不起键盘。

解决方案：强制性给加上点击事件，点击后给input框聚集光标。
```javascript
cilckTextarea(){
    document.getElementsByClassName('cont-inp')[0].focus();
}
```

### 3、上传图片，iPhone7 iPhone7p在上传图片的时候，传不过去图片的name
解决方案：手动添加图片name
```javascript
let data = new FormData();
data.append("fileName", file[0],file[0].name);
```

### 4、ios微信打开网页键盘弹起后页面上滑，导致弹框里的按钮响应区域错位
解决方案：手动把滚动条滚到底部写一个自定义指令。
```javascript
import Vue from 'vue';
Vue.directive('blur', {
    'bind'(el) {
        el.addEventListener("click", function(){
            window.scrollTo(0,0);
        })
    }
});
//在点击页面提交按钮的时候，把滚动条滚到底部就OK了
```

### 5、微信浏览器调整字体后，页面错位。

解决方案：阻止页面字体自动调整大小

```javascript
// 安卓：(暂未尝试)
(function() {
  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
    handleFontSize();
  } else {
    if (document.addEventListener) {
      document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    } else if (document.attachEvent) {
      //IE浏览器，非W3C规范
      document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    }
  }
  function handleFontSize() {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on('menu:setfont', function() {
      WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
    });
  }
})();

//iOS：
// ios使用-webkit-text-size-adjust禁止调整字体大小
body{-webkit-text-size-adjust: 100%!important;}

```

### 6、关于移动端样式兼容的问题

设置meta标签viewport属性，使其无视设备的真实分辨率，直接通过dpi，在物理尺寸和浏览器之间重设分辨率，从而达到能有统一的分辨率的效果。并且禁止掉用户缩放

``` javascript
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />

```

### 7、iOS下取消input在输入的时候英文首字母的默认大写

``` javascript
<input type="text" autocapitalize="none">
```

### 8、禁止 iOS 识别长串数字为电话

```javascript
<meta name="format-detection" content="telephone=no" />
```

### 9、禁止ios和android用户选中文字

``` javascript
-webkit-user-select: none;

```
### 10、一些情况下对非可点击元素如(label,span)监听click事件，ios下不会触发

```javascript
cursor: pointer;
```
### 11. ios :active 真机上点击无反应

```javascript
<body ontouchstart>
```