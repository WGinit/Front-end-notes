<!--
 * @Author: wginit
 * @Date: 2019-11-14 17:53:37
 * @LastEditTime: 2019-11-14 18:19:21
 -->

# H5移动端常用知识点总结

#### 1. 弹出数字键盘

```javascript
<!-- 有"#" "*"符号输入 -->
<input type="tel">

<!-- 纯数字 -->
<input pattern="\d*">
```

#### 2. 调用系统的某些功能

```javascript

<!-- 拨号 -->
<a href="tel:10086">打电话给: 10086</a>

<!-- 发送短信 -->
<a href="sms:10086">发短信给: 10086</a>

<!-- 发送邮件 -->
<a href="mailto:3307066500@qq.com">发邮件给：3307066500@qq.com</a>

<!-- 选择照片或者拍摄照片 -->
<input type="file" accept="image/*">

<!-- 选择视频或者拍摄视频 -->
<input type="file" accept="video/*">

<!-- 多选 -->
<input type="file" multiple>

```

#### 3. 打开原生应用(URL Scheme)

```javascript
<a href="weixin://">打开微信</a>
<a href="alipays://">打开支付宝</a>
<a href="alipays://platformapi/startapp?saId=10000007">打开支付宝的扫一扫功能</a>
<a href="alipays://platformapi/startapp?appId=60000002">打开支付宝的蚂蚁森林</a>
```

#### 4. 解决active伪类失效

```javascript
<body ontouchstart></body>

```

#### 5. 忽略自动识别

```javascript
<!-- 忽略浏览器自动识别数字为电话号码 -->
<meta name="format-detection" content="telephone=no">

<!-- 忽略浏览器自动识别邮箱账号 -->
<meta name="format-detection" content="email=no">
```

#### 6. 解决input失焦后页面没有回弹

```javascript
  <template>
    <input type="text" @focus="focus" @blur="blur">
  </template>

  <script>
    export default {
      data() {
        return {
          scrollTop: 0
        }
      },

      methods: {
        focus() {
          this.scrollTop = document.scrollingElement.scrollTop;
        },

        blur() {
          document.scrollingElement.scrollTo(0, this.scrollTop);
        }
      }
    }
  </script>
```

#### 7. 禁止长按

```javascript

// 禁止长按图片保存
img {
  -webkit-touch-callout: none;
  pointer-events: none; // 像微信浏览器还是无法禁止，加上这行样式即可
}

// 禁止长按选择文字
div {
  -webkit-user-select: none;
}

// 禁止长按呼出菜单
div {
  -webkit-touch-callout: none;
}

```

#### 7. 滑动不顺畅，粘手

```javascript
div {
  -webkit-overflow-scrolling: touch;
}

```
#### 8. 屏幕旋转为横屏时，字体大小会变

```javascript
* {
  -webkit-text-size-adjust: 100%;
}
```
#### 9. 最简单的rem自适应

```javascript
html {
 font-size: calc(100vw / 3.75);
}

body {
  font-size: .14rem;
}

```

#### 10. 滑动穿透

```javascript
<div class="mask">
  <div class="content">我是弹框</div>
</div>

.mask {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #333, $alpha: .6);

  .content {
    padding: 20px;
    background-color: #fff;
    width: 300px;
  }
}

或者
document.querySelector(".mask").addEventListener("touchmove", event => {
  event.preventDefault();
});

获取在vue中

<div class="mask" @touchumove.prevent></div>

或者

document.querySelector(".mask").addEventListener("touchmove", event => {
  if (event.target.classList.contains("mask")) event.preventDefault();
});

或者

<div class="mask" @touchumove.self.prevent></div>

```
