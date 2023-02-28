/*
 * @Author: c_kai c_kai@ctrip.com
 * @Date: 2023-02-28 14:31:15
 * @LastEditors: c_kai c_kai@ctrip.com
 * @LastEditTime: 2023-02-28 14:52:02
 * @FilePath: /testUrlToimage/utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path')
/**
 * 读取路径信息
 * @param {string} path 路径
 */
 function getStat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve(false);
      } else {
        resolve(stats);
      }
    })
  })
}

/**
  * 创建路径
  * @param {string} dir 路径
  */
function mkdir(dir) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, err => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    })
  })
}

const existsDir = async (dir) => {
  if (fs.existsSync(dir)) {
    console.log('Directory exists!');
  } else {
    console.log('Directory not found.');
    fs.mkdirSync(dir)
  }
}


const Utils = {
  existsDir
}

module.exports = Utils;