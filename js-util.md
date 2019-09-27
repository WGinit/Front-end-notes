<!--
 * @Author: Wginit
 * @Date: 2019-09-26 09:23:15
 * @LastEditTime: 2019-09-26 16:59:49
 -->
## JS常用的奇淫技巧

### 优雅的取随机字符串

``` javascript
Math.random().toString(16).substring(2) // 13位
Math.random().toString(36).substring(2) // 11位
```

### 在指定的范围内生成一个随机数

``` javascript
const randomInRange = (min, max) => Math.random() * (max - min) + min;
// randomInRange(2,10) -> 6.0211363285087005
```

### 在指定的范围内生成一个随机整数

``` javascript
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// randomIntegerInRange(0, 5) -> 2
```

### 创建过去七天的数组，如果将代码中的减号换成加号，你将得到未来7天的数组集合

``` javascript

// 创建过去七天的数组
[...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days));
```

### 生成随机十六进制代码（生成随机颜色）

``` javascript
// 生成随机十六进制代码 如：'#c618b2'

'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
```

### 获取两个日期之间相差的天数

``` javascript
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);
// getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")) -> 9
```

### 根据键值对创建对象

``` javascript
const objectFromPairs = arr => arr.reduce((a, v) => (a[v[0]] = v[1], a), {});
// objectFromPairs([['a',1],['b',2]]) -> {a: 1, b: 2}
```

### 对象转化为键值

``` javascript
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);
// objectToPairs({a: 1, b: 2}) -> [['a',1],['b',2]])
```

### 大写每个单词的首字母

``` javascript
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
// capitalizeEveryWord('hello world!') -> 'Hello World!'
```


### 网址参数，通过适当的正则表达式，使用 match() 来获得所有的键值对， Array.reduce() 来映射和组合成一个单一的对象。将 location.search 作为参数传递给当前 url。

``` javascript
const getUrlParameters = url =>
  url.match(/([^?=&]+)(=([^&]*))/g).reduce(
    (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
  );
// getUrlParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}
```

### 扁平化数组

``` javascript
const array = [1, [2, [3, 4], 5], 6, 7];
console.log(array.toString().split(',').map(ele => Number.parseInt(ele))); // => [ 1, 2, 3, 4, 5, 6, 7 ]

* 类似arr.flat()

```

### 获取数组中的最大值和最小值

``` javascript
let  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
let maxInNumbers = Math.max.apply(Math, numbers);
let minInNumbers = Math.min.apply(Math, numbers);
```

### 函数柯里化

``` javascript
function curry(fn) {
  if (fn.length <= 1) return fn
  const generator = (...args) => {
    if (fn.length === args.length) {
      return fn(...args)
    } else {
      return (...args2) => {
        return generator(...args, ...args2)
      }
    }
  }
  return generator
}

// let add = (a, b, c, d) => a + b + c + d
// const curriedAdd = curry(add)
// curriedAdd(5)(6)(7)(8)
// >add(5,6,7,8)
// >26

```

### 数据类型判断

``` javascript
const superTypeof = function (val) {
    let ans = typeof val;
    if (ans === 'object') {
        ans = ({}).toString.call(val).slice(8, -1).toLowerCase();
    }
    return ans;
}
/**
 superTypeof(undefined); // undefined
 superTypeof(null); // null
 superTypeof(true); // boolean
 superTypeof(1); // number
 superTypeof(''); // string
 superTypeof(Symbol(1)); // symbol
 superTypeof(function () {}); // function
 superTypeof([]); // array
 superTypeof({}); // object
 superTypeof(new Date()); // date
 superTypeof(/abc/ig); // regexp
 superTypeof(Math); // math
 superTypeof(new Error('error')); // error
 ...
 */
```

### 确保数组值
##### 使用 grid ，需要重新创建原始数据，并且每行的列长度可能不匹配， 为了确保不匹配行之间的长度相等，可以使用Array.fill方法。
``` javascript
let array = Array(5).fill('');
console.log(array);
// outputs (5) ["", "", "", "", ""]
```

### 手写promise

``` javascript
function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:
   }
}

// let p=new myPromise(function(resolve,reject){resolve(1)});
// p.then(function(x){console.log(x)})
// 输出1
```

### 函数防抖

``` javascript
// 防抖动函数
const debounce = (fn, wait=1500, immediate) => {
    let timer;
    return function() {
        if(immediate) {
            fn.apply(this,arguments)
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=> {
            fn.apply(this,arguments)
        },wait)
    }
}

```

###  函数节流

``` javascript
const throttle = (fn, wait = 1500) => {
  let prev = new Date();
  return function() {
    const args = arguments;
    const now = new Date();
    if (now - prev > wait) {
      fn.apply(this, args);
      prev = new Date();
    }
  }
}

```

### 加强版函数节流

debounce 设置的 delay 时间结束就进行下一次操作，于是每次 debounce 都为该用户重新生成定时器，回调函数被延迟了不计其数次。频繁的延迟会导致用户迟迟得不到响应，用户同样会产生“这个页面卡死了”的观感。
为了避免弄巧成拙，我们需要借力 throttle 的思想，打造一个“有底线”的 debounce——等你可以，但我有我的原则：delay 时间内，我可以为你重新生成定时器；但只要delay的时间到了，我必须要给用户一个响应.

```javascript
// fn是我们需要包装的事件回调, delay是时间间隔的阈值
function throttle(fn, delay) {
  // last为上一次触发回调的时间, timer是定时器
  let last = 0, timer = null
  // 将throttle处理结果当作函数返回

  return function () {
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments
    // 记录本次触发回调的时间
    let now = +new Date()

    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
    // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
       clearTimeout(timer)
       timer = setTimeout(function () {
          last = now
          fn.apply(context, args)
        }, delay)
    } else {
        // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
        last = now
        fn.apply(context, args)
    }
  }
}
```

### 生成随机UID

``` javascript
const genUid = () => {
  let length = 20
  let soupLength = genUid.soup_.length
  let id = []
  for (let i = 0; i < length; i++) {
    id[i] = genUid.soup_.charAt(Math.random() * soupLength)
  }
  return id.join('')
}
genUid.soup_ = '!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
genUid() // ;l`yCPc9A8IuK}?N6,%}

```

### RGB色值生成16进制色值

``` javascript
const rgb2Hex = rgb => {
    let rgbList = rgb.toString().match(/\d+/g)
    let hex = '#'
    for (let i = 0, len = rgbList.length; i < len; ++i) {
      hex += ('0' + Number(rgbList[i]).toString(16)).slice(-2)
    }
    return hex
};
rgb2Hex('100, 50, 0') // '#643200'

```

### 颜色混合

``` javascript
const colourBlend = (c1, c2, ratio) => {
    ratio = Math.max(Math.min(Number(ratio), 1), 0)
    let r1 = parseInt(c1.substring(1, 3), 16)
    let g1 = parseInt(c1.substring(3, 5), 16)
    let b1 = parseInt(c1.substring(5, 7), 16)
    let r2 = parseInt(c2.substring(1, 3), 16)
    let g2 = parseInt(c2.substring(3, 5), 16)
    let b2 = parseInt(c2.substring(5, 7), 16)
    let r = Math.round(r1 * (1 - ratio) + r2 * ratio)
    let g = Math.round(g1 * (1 - ratio) + g2 * ratio)
    let b = Math.round(b1 * (1 - ratio) + b2 * ratio)
    r = ('0' + (r || 0).toString(16)).slice(-2)
    g = ('0' + (g || 0).toString(16)).slice(-2)
    b = ('0' + (b || 0).toString(16)).slice(-2)
    return '#' + r + g + b
}
colourBlend('#ff0000', '#3333ff', 0.5) // "#991a80"

```

### 判断是否为质数

``` javascript
const mathIsPrime = n => {
  if (n === 2 || n === 3) {
    return true
  }
  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  for (let x = 6; x <= Math.sqrt(n) + 1; x += 6) {
    if (n % (x - 1) == 0 || n % (x + 1) == 0) {
      return false
    }
  }
  return true
}
mathIsPrime(0) // true

```

### 目前最功能最全面多类型数据深拷贝

``` javascript
    function deepClone(target, map = new WeakMap()) {
        const mapTag = '[object Map]';
        const setTag = '[object Set]';
        const arrayTag = '[object Array]';
        const objectTag = '[object Object]';
        const argsTag = '[object Arguments]';

        const boolTag = '[object Boolean]';
        const dateTag = '[object Date]';
        const numberTag = '[object Number]';
        const stringTag = '[object String]';
        const symbolTag = '[object Symbol]';
        const errorTag = '[object Error]';
        const regexpTag = '[object RegExp]';
        const funcTag = '[object Function]';

        const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];


        function forEach(array, iteratee) {
            let index = -1;
            const length = array.length;
            while (++index < length) {
                iteratee(array[index], index);
            }
            return array;
        }

        function isObject(target) {
            const type = typeof target;
            return target !== null && (type === 'object' || type === 'function');
        }

        function getType(target) {
            return Object.prototype.toString.call(target);
        }

        function getInit(target) {
            const Ctor = target.constructor;
            return new Ctor();
        }

        function cloneSymbol(targe) {
            return Object(Symbol.prototype.valueOf.call(targe));
        }

        function cloneReg(targe) {
            const reFlags = /\w*$/;
            const result = new targe.constructor(targe.source, reFlags.exec(targe));
            result.lastIndex = targe.lastIndex;
            return result;
        }

        function cloneFunction(func) {
            const bodyReg = /(?<={)(.|\n)+(?=})/m;
            const paramReg = /(?<=\().+(?=\)\s+{)/;
            const funcString = func.toString();
            if (func.prototype) {
                const param = paramReg.exec(funcString);
                const body = bodyReg.exec(funcString);
                if (body) {
                    if (param) {
                        const paramArr = param[0].split(',');
                        return new Function(...paramArr, body[0]);
                    } else {
                        return new Function(body[0]);
                    }
                } else {
                    return null;
                }
            } else {
                return eval(funcString);
            }
        }

        function cloneOtherType(targe, type) {
            const Ctor = targe.constructor;
            let typeObj = {
                boolTag: '',
                numberTag: '',
                stringTag: '',
                errorTag: '',
                dateTag: new Ctor(targe),
                regexpTag: cloneReg(targe),
                symbolTag: cloneSymbol(targe),
                funcTag: cloneFunction(targe)
            }
            return typeObj[type] || null
        }
            // 克隆原始类型
            if (!isObject(target)) {
                return target;
            }

            // 初始化
            const type = getType(target);
            let cloneTarget;
            if (deepTag.includes(type)) {
                cloneTarget = getInit(target);
            } else {
                return cloneOtherType(target, type);
            }

            // 防止循环引用
            if (map.get(target)) {
                return map.get(target);
            }
            map.set(target, cloneTarget);

            // 克隆set
            if (type === setTag) {
                target.forEach(value => {
                    cloneTarget.add(deepClone(value, map));
                });
                return cloneTarget;
            }

            // 克隆map
            if (type === mapTag) {
                target.forEach((value, key) => {
                    cloneTarget.set(key, deepClone(value, map));
                });
                return cloneTarget;
            }

            // 克隆对象和数组
            const keys = type === arrayTag ? undefined : Object.keys(target);
            forEach(keys || target, (value, key) => {
                if (keys) {
                    key = value;
                }
                cloneTarget[key] = deepClone(target[key], map);
            });
            return cloneTarget;
    }

```

### 相对好用的时间格式转换

``` javascript
/**
* oldDate: Date | String | Number
* fmt: yyyy-MM-dd hh:mm
*/
const formatDate = (oldDate, fmt) => {
  let date = new Date()
  if (typeof oldDate === 'string' || typeof oldDate === 'number') {
    date = new Date(+oldDate)
  } else {
    date = oldDate
  }
if (/(y+)/.test(fmt)) {
  fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))  }
  let o = {
  'M+': date.getMonth() + 1,
  'd+': date.getDate(),
  'h+': date.getHours(),
  'm+': date.getMinutes(),
  's+': date.getSeconds()  }
  function padLeftZero (str) {
    return ('00' + str).substr(str.length)
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
// yyyy年MM月dd -> 2019年09月10日
// hh分mm秒 -> 16分14秒
```

### 获取指定天的时间戳

``` javascript
/**
* num: number, 正数为未来时间，负数为过去时间
*
*/
const setDate = (num) => {  return Date.now() + num * 24 * 60 * 60 * 1000}
// 12 个小时之前的时间 -> setDate(-.5)  = 1568060635065
// 24 个小时之前的时间 -> setDate(-1) = 1568017465917
// 三天后的时间 -> setDate(3) = 1568363086637
```

### js设置Cookie

``` javascript
const setCookie = (name, value, Hours) => {
    let d = new Date();
    let offset = 8;
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    let nd = utc + (3600000 * offset);
    let exp = new Date(nd);
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString()
}
```

### js获取Cookie

``` javascript
const getCookie = (name) => {
  let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
  return null
}

```
### js 加入收藏夹

``` javascript
const AddFavorite = (sURL, sTitle) => {
    try {
        window.external.addFavorite(sURL, sTitle)
    } catch(e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "")
        } catch(e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加")
        }
    }
}

```

### js 压缩css代码

``` javascript
const miniCss = (s) => {
    s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
    s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
    s = s.replace(/;\s*;/g, ";"); //清除连续分号
    s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
    return (s == null) ? "" : s[1];
}
```

