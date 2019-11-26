module.exports = [
  getSideBar('JavaScript', [
    ['/javascript/util', '常用函数封装'],
    ['/javascript/event-loop', '事件循环'],
    ['/javascript/design', '设计模式']
  ]),
  getSideBar('Css', [
    ['/css/skill', '开发技巧']
  ]),
  getSideBar('移动端', [
    ['/web/util', '移动端常用知识点总结']
  ]),
  getSideBar('性能优化', [
    ['/performance/web', 'web端性能优化']
  ]),
  getSideBar('网络协议', [
    ['/network/http-code', 'http请求状态码']
  ]),
  getSideBar('注释', [
    ['/annotation/code', '代码注释']
  ])
]

function getSideBar(_title, _children) {
  return {
    title: _title,
    collapsable: true,
    displayAllHeaders: true,
    children: _children
  }
}
