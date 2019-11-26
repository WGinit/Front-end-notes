# web性能优化

## 首屏时间统计

```javascript
let times = {};
let t = window.performance.timing;

// 优先使用 navigation v2  https://www.w3.org/TR/navigation-timing-2/
if (typeof window.PerformanceNavigationTiming === 'function') {
  try {
    var nt2Timing = performance.getEntriesByType('navigation')[0]
    if (nt2Timing) {
      t = nt2Timing
    }
  } catch (err) {
  }
}

//重定向时间
times.redirectTime = t.redirectEnd - t.redirectStart;

//dns查询耗时
times.dnsTime = t.domainLookupEnd - t.domainLookupStart;

//TTFB 读取页面第一个字节的时间
times.ttfbTime = t.responseStart - t.navigationStart;

//DNS 缓存时间
times.appcacheTime = t.domainLookupStart - t.fetchStart;

//卸载页面的时间
times.unloadTime = t.unloadEventEnd - t.unloadEventStart;

//tcp连接耗时
times.tcpTime = t.connectEnd - t.connectStart;

//request请求耗时
times.reqTime = t.responseEnd - t.responseStart;

//解析dom树耗时
times.analysisTime = t.domComplete - t.domInteractive;

//白屏时间
times.blankTime = (t.domInteractive || t.domLoading) - t.fetchStart;

//domReadyTime
times.domReadyTime = t.domContentLoadedEventEnd - t.fetchStart;

console.log(times)
```
