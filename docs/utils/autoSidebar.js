/**
 * 设置多个侧边栏
 * 为不同的页面组来显示不同的侧边栏， 需要把一个侧边栏下的多个文件放在一个目录下， 一个侧边栏一个目录
 */

const fs = require('fs')
const path = require('path')
const { sep } = path
const rootpath = path.resolve(path.dirname(__dirname)) // 根目录

console.log(rootpath)

let pathArr = []
// 读取目录
let readDir = folderPath => {
  let exists = fs.existsSync(folderPath),
    stat = fs.statSync(folderPath)

  if (exists && stat) {
    //判断文件、文件目录是否存在
    if (stat.isFile()) {
      let tempArr = folderPath.replace(rootpath + sep, '').split(sep) // 去除根目录部分，并分割成数组
      // 大于 1 可排除根目录下的 'README.md'
      if (tempArr.length > 1) {
        pathArr.forEach(item => {
          // 如果 pathArr 中已经有相同目录则直接 push .md 文件
          if (item.join(sep).indexOf(tempArr.slice(0, -1).join(sep)) != -1) {
            item.push(tempArr.pop())
          }
        })
        // 排除没有 .md 的目录
        if (tempArr[tempArr.length - 1].indexOf('.md') > 0) {
          pathArr.push(tempArr)
        }
      }
    } else if (stat.isDirectory()) {
      let files = fs.readdirSync(folderPath)
      if (files && files.length > 0) {
        files.forEach(function (file) {
          if (file != '.vuepress') {
            // 排除 .vuepress 目录
            readDir(folderPath + sep + file) //递归
          }
        })
      }
    }
  }
}
readDir(rootpath)
console.log('pathArr:', pathArr);

let getSidebar = (title, children = ['']) => {
  let arr = []
  arr.push({
    title,
    children
  })
  return arr
}

let sidebar = {}
pathArr.forEach(item => {
  let children = []
  let link = ''
  let title = ''
  item.forEach(key => {
    if (key.indexOf('.md') > 0) {
      if (key.toUpperCase() === 'README.MD') key = ''
      children.push(key.replace(/\.md/gi, ''))
    } else {
      link += `${key}/`
      title = key
    }
  })
  sidebar[`/${link}`] = getSidebar(title, children)
})
console.log('sidebar:', JSON.stringify(sidebar));
module.exports = sidebar