/*
 * @Author: c_kai c_kai@ctrip.com
 * @Date: 2023-02-28 15:12:00
 * @LastEditors: c_kai c_kai@ctrip.com
 * @LastEditTime: 2023-02-28 15:13:18
 * @FilePath: /testUrlToimage/nightmare.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true, gotoTimeout: 10000 });


nightmare
  .goto("https://nytimes.com")
  .screenshot("nyt-nightmare.png")
  .end()
  .then(console.log)
  .catch((error) => {
    console.error("screenshot failed:", error);
  });