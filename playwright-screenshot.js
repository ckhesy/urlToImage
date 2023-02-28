/*
 * @Author: c_kai c_kai@ctrip.com
 * @Date: 2023-02-28 15:03:54
 * @LastEditors: c_kai c_kai@ctrip.com
 * @LastEditTime: 2023-02-28 15:05:15
 * @FilePath: /testUrlToimage/playwright-screenshot.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { chromium } = require("playwright");
const Utils = require('./utils')
(async () => {
  let browser = await chromium.launch();
  await Utils.existsDir('screenshot-dist')
  let page = await browser.newPage();
  await page.setViewportSize({ width: 340, height: 540 });
  await page.goto("https://www.trip.com/appdealstrip/hotel/city?city=2");
  await page.screenshot({ path: `./screenshot-dist/nyt-playwright-chromium.png` });
  await browser.close();
})();