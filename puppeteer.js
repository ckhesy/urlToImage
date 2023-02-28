/*
 * @Author: c_kai c_kai@ctrip.com
 * @Date: 2023-02-28 11:18:23
 * @LastEditors: c_kai c_kai@ctrip.com
 * @LastEditTime: 2023-02-28 15:00:37
 * @FilePath: /zoo-ppc/puppeteer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const puppeteer = require('puppeteer');
const Utils = require('./utils')

puppeteer
  .launch({
    defaultViewport: {
      width: 320,
      height: 540,
    },
  })
  .then(async (browser) => {
    const page = await browser.newPage();
    await Utils.existsDir('dist')
    const url = 'https://www.fat1.qa.nt.tripqate.com/appdealstrip/hotel/city?city=2'
    // await page.goto('https://my.trip.com/appdealstrip/page/562720636864139264?locale=en-MY&currency=MYR&pageKey=0000&engine=DISPLAY_FACEBOOK&category=Hotel&subCategory=Promotion&aid=1301808&sid=3874677&fb_campaign_id={{campaign.id}}&fb_adset_id={{adset.id}}&fb_ad_id={{ad.id}}&utm_campaign={{campaign.name}}');
    await page.goto(url);
    await page.screenshot({ path: `./dist/${url.split('?')[1]}.webp` });
    await browser.close();
  }).catch(e => {
    console.log(e)
  });