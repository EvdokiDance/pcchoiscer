import { createJson, autoScroll, getUrls, isPaginationNext } from "./helper.js";
import { startBrowser } from "./browser.js";


const link = 'https://market.yandex.ru/catalog--kompiuternye-komplektuiushchie/54536';


async function startPage(browser, url) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setExtraHTTPHeaders({
    "user-agent":"Mozilla/5.0 (Windows; U; Windows NT 10.5; WOW64) AppleWebKit/534.10 (KHTML, like Gecko) Chrome/51.0.3957.199 Safari/603.0 Edge/10.58314",
    "accept":"text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8;q=0.5",
    "accept-encoding": "gzip,deflate,bzip2,sdch",
    "accept-language": " ru-RU,ru,en-US,en;q=0.9,en;q=0.8",
    "Connection": "keep-alive",
  });
  await page.goto(url, {waitUntil: 'domcontentloaded'});
  return page;
}


async function focusPage (page, timeMs) {
  if (page.isClosed()) {
    return 0;
  } 
  new Promise(async (res, rej) => {
    setTimeout(res, timeMs);
      if (!page.isClosed()) {
        await page.bringToFront();
      }
  }).then(() => {
   return focusPage(page, timeMs);
  })
}


async function scrapeData(page, recurArr) {
  await page
    .waitForSelector('div[data-test-id="virtuoso-item-list"]')
    .catch(() => {
      console.error("item list not found");
    });
  await autoScroll(page, 50);
  await page
    .$$eval('div[data-test-id="virtuoso-item-list"] > div', (listElem) => {
      console.log('list', listElem.length);
      let tempArr = [];
      listElem = listElem.map((elem) => elem.querySelector("article"));
      listElem = listElem.filter((elem) => elem !== null);
      listElem.map((elem) => {
        let data = {};

        if (elem.querySelector("._1GfBD a > span") !== null) {
          data["name"] = elem.querySelector("._1GfBD a > span").textContent;
        }

        data["img"] = elem.querySelector("img").src;

        if (elem.querySelector('div[data-zone-name="price"] h3') !== null) {
          data["price"] = elem
            .querySelector('div[data-zone-name="price"] h3')
            .textContent.split(":")[1];
        }

        data["link"] = elem.querySelector("._1GfBD a").href;

        let featuresList = elem.querySelectorAll(".wbBvs._34OXv > ._1CW1P");
        let featuresObj = {};

        for (const feature of featuresList) {
          let key = feature.textContent.split(':')[0];
          let value = String(feature.textContent.split(':').slice(1)).trim();

          featuresObj[key] = value;
          data["features"] = featuresObj;

          // console.log(String(feature.textContent.split(':')[0]));
          // console.log(String(feature.textContent.split(':').slice(1)));
        } 
        tempArr.push(data) 
      });
      return new Promise((res) => res(tempArr));
    })
    .then((tempArr) => {
      console.log('temp', tempArr.length);
      recurArr.push(...tempArr);
    });

    console.log('recur', recurArr.length);

  if (await isPaginationNext(page)) {
      return await scrapeData(page, recurArr);
  }
  return recurArr;
}



(async () => {
  try {
    const browser = await startBrowser();
    const page = await startPage(
      browser,
      link,
    );

    await page.waitForSelector("._1jFQq");

    let links = await getUrls(page).then((value) => value);

    const parts = [
      "videocards",
      "processors",
      "RAM",
      "SSD",
      "HDD",
      "moutherboards",
      "coolers",
      "cases",
      "power_supplies",
    ];


        let time = 700;
        let amoutParts = parts.length;

      
         for (const [index, link] of links.entries()) {
            if (index === 9) {
              continue;
            }
            startPage(browser, link).then( async (page) => {
              time+=100;
              console.log(page, index, time);
             await focusPage(page, time).catch((error) => console.log(error));
              scrapeData(page, []).then(async (data) => {
                 createJson(`${parts[index]}`, data);
                 amoutParts--;
                return await page.close();
              })
            });
          }

          
          let closeBrowser = setInterval( async () => {
            if (amoutParts === 0) {
              await browser.close();
              clearInterval(closeBrowser);
            }
          }, 3000);   


          // // Для отладки
          // startPage(browser, links[0]).then( async (page) => {
          //   // focusPage(page, time).catch((error) => console.log(error));
          //   scrapeData(page, []).then(async (data) => {
          //      createJson(`videocards`, data);
          //     //  links = links.filter((_, idx) => idx !== 0);
          //     // return await page.close();
          //   })
          // })

     
    // await browser.waitForTarget(() => false);
      // await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
