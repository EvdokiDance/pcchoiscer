import { createJson, autoScroll, getUrls, isPaginationNext, generateRandomUA } from "./helper.js";
import { startBrowser } from "./browser.js";


const link = 'https://market.yandex.ru/catalog--kompiuternye-komplektuiushchie/54536';

const urls = [
  'https://market.yandex.ru/catalog--videokarty/26912670/list?',
  'https://market.yandex.ru/catalog--protsessory-cpu/26912730/list?',
  'https://market.yandex.ru/catalog--moduli-pamiati/26912790/list?',
  'https://market.yandex.ru/catalog--vnutrennie-tverdotelnye-nakopiteli-ssd/26912750/list?',
  'https://market.yandex.ru/catalog--vnutrennie-zhestkie-diski/55316/list?',
  'https://market.yandex.ru/catalog--materinskie-platy/26912770/list?',
  'https://market.yandex.ru/catalog--kulery-i-sistemy-okhlazhdeniia-dlia-kompiuterov/26912910/list?',
  'https://market.yandex.ru/catalog--kompiuternye-korpusa/55319/list?',
  'https://market.yandex.ru/catalog--bloki-pitaniia-dlia-kompiuterov/26912850/list?',
  'https://market.yandex.ru/catalog--zvukovye-karty/55317/list?'
]


const userAgent = generateRandomUA();

async function startPage(browser, url) {


  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({
    "user-agent": userAgent,
    "accept":"text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8;q=0.5",
    "accept-encoding": "gzip,deflate,bzip2,sdch",
    "accept-language": " ru-RU,ru,en-US,en;q=0.5,en;q=0.4",
    "Connection": "keep-alive",
})

  await page.setViewport({ width: 1920, height: 1080 });
  await new Promise(r => setTimeout(r, 500 + Math.random() * 1000));
  await page.goto(url);


  // let captcha = await page.$('[data-testid="checkbox-captcha"]');
  // console.log('captcha', captcha);
  // if (captcha) {
  //    await Promise.all([
  //     page.waitForNavigation(),
  //     page.click('[data-testid="checkbox-captcha"]'),
  //   ])
  // }

  return await page;
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
          let price = elem
          .querySelector('div[data-zone-name="price"] h3')
          .textContent.split(":")[1];
          data["price"] = Number(price?.split('₽')[0].replace(/\s/g,''))
         
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


    await new Promise(r => setTimeout(r, 250 + Math.random() * 500));

  if (await isPaginationNext(page)) {
      return scrapeData(page, recurArr);
  }
  return recurArr;
}



(async () => {
  try {
    const browser = await startBrowser();
    const page = await startPage(browser, link);

    await page.waitForSelector("._1jFQq");

    // let links = await getUrls(page).then((value) => value);

    // console.log(links);

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


        let time = 1000;
        let amoutParts = parts.length;
      const pageArr = [];
      
        for (const [index, link] of urls.entries()) {
          // if (index === 9) {
          //   continue;
          // }
          startPage(browser, link).then( async (page) => {
          console.log(link);
            time+=300;
          await  focusPage(page, time).catch((error) => console.log(error));
            scrapeData(page, []).then(async (data) => {
            createJson(`${parts[index]}`, data);
            amoutParts--;
          })
        });
      }

        //   for (const [index, link] of link.entries()) {
        //   // if (index === 9) {
        //   //   continue;
        //   // }
        //  let page = await startPage(browser, link)
        //   time+=300;
        // await focusPage(page, time).catch((error) => console.log(error));
        // let data = await scrapeData(page, []);
        // createJson(`${parts[index]}`, data);
        //   amoutParts--;
        // };
      




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
