(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{231:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"web性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web性能优化"}},[t._v("#")]),t._v(" web性能优化")]),t._v(" "),a("h2",{attrs:{id:"首屏时间统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首屏时间统计"}},[t._v("#")]),t._v(" 首屏时间统计")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" times "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优先使用 navigation v2  https://www.w3.org/TR/navigation-timing-2/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PerformanceNavigationTiming "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nt2Timing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'navigation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nt2Timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nt2Timing\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//重定向时间")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirectTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirectEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirectStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//dns查询耗时")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dnsTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TTFB 读取页面第一个字节的时间")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ttfbTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseStart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//DNS 缓存时间")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appcacheTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupStart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//卸载页面的时间")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unloadTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unloadEventEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unloadEventStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//tcp连接耗时")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tcpTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//request请求耗时")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reqTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解析dom树耗时")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("analysisTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domComplete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domInteractive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//白屏时间")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blankTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domInteractive "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domLoading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//domReadyTime")]),t._v("\ntimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domReadyTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domContentLoadedEventEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("times"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);