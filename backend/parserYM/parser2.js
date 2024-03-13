import {Cluster} from 'puppeteer-cluster';
import { autoScroll, createJson, generateRandomUA } from './helper.js';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin())


const link = 'https://market.yandex.ru/catalog--kompiuternye-komplektuiushchie/54536';

const userAgent = generateRandomUA();


(async () => {
    console.log("START PARSE");
    const urls = {
      'videocards': 'https://market.yandex.ru/catalog--videokarty/26912670/list?',
      'processors': 'https://market.yandex.ru/catalog--protsessory-cpu/26912730/list?',
      'RAM':'https://market.yandex.ru/catalog--moduli-pamiati/26912790/list?',
      'SSD':'https://market.yandex.ru/catalog--vnutrennie-tverdotelnye-nakopiteli-ssd/26912750/list?',
      'HDD':'https://market.yandex.ru/catalog--vnutrennie-zhestkie-diski/55316/list?',
      'moutherboards':'https://market.yandex.ru/catalog--materinskie-platy/26912770/list?',
      'coolers':'https://market.yandex.ru/catalog--kulery-i-sistemy-okhlazhdeniia-dlia-kompiuterov/26912910/list?',
      'cases':'https://market.yandex.ru/catalog--kompiuternye-korpusa/55319/list?',
      'power_supplies':'https://market.yandex.ru/catalog--bloki-pitaniia-dlia-kompiuterov/26912850/list?',
      // 'sound_card':'https://market.yandex.ru/catalog--zvukovye-karty/55317/list?',
    }



    const cluster = await Cluster.launch({
      concurrency: Cluster.CONCURRENCY_PAGE,
      maxConcurrency: 100,
      timeout: 999999999,
      puppeteer: puppeteer,
      puppeteerOptions: {
        headless: true,
        defaultViewport: false,
        ignoreHTTPSErrors: true,
        args: [
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--no-first-run',
          '--no-sandbox',
          '--no-zygote',
          '--deterministic-fetch',
          '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials',
        ]
      },
    });
  
    cluster.on("taskerror", (err, data) => {
      console.log(`Error crawling ${JSON.stringify(data)}: ${err.message}`);
    });




    async function scrapeData (page, data) {
      try {
        
        const {idx, url, componentsPerPage, pageNumber} = data;

      console.log(url+`page=${pageNumber}`);

      console.log('components-size:', idx, componentsPerPage.length);

      let randomTime = 1000 + Math.random() * 2000;

      await new Promise(res => setTimeout(res, randomTime));
        
      await page.goto(url+`page=${pageNumber}`);

      // await new Promise(res => setTimeout(res, 9999999));
    
        await autoScroll(page, 50);
        
        let components = [];

        if (idx == 'coolers') {


          await (async () => {
                components = await page.$$(
                  '[data-autotest-id="product-snippet"]'
                );


                console.log('SIZE_', components.length);
  
      
                for (const component of components) {
      
                  let componentObj = {
                  };
      
                  try {
                    componentObj['img'] = await page.evaluate(
                      (el) => el.querySelector("img").src,
                      component, 
                    );
                  } catch (error) {}
      
      
                  try {
                    componentObj['name'] = await page.evaluate(
                      (el) => el.querySelector('[data-baobab-name="title"]').textContent,
                      component, 
                    );
                  } catch (error) {}
      
      
                  try {
                   let price = await page.evaluate(
                      (el) => {

                        let price = el.querySelector('._8-sD9').textContent.split(' ')[1].split('₽')[0].replace(/\s/g,'');
                    
                        return Number(price);
                      },
                      component, 
                    );

                  
                    if (Boolean(price)) {
                      componentObj['price'] = price;
                    }

                  } catch (error) {}
      
                  try {
                    componentObj['link'] = await page.evaluate(
                      (el) => el.querySelector('a').href,
                      component, 
                    );
                  } catch (error) {}
                  

                  console.log(componentObj);

                  if (componentObj['name'] && componentObj['price'] && componentObj['link']) {
                    componentsPerPage.push(componentObj)
                  }
                }
              })()

          }

         else {

          await (async () => {
            components = await page.$$(
              'div[data-test-id="virtuoso-item-list"] > div'
            );


            console.log('SIZE_', components.length);
    
            for (const component of components) {
            
    
             let componentObj = {
             };
      
              try {
                componentObj['name'] = await page.evaluate(
                  (el) => el.querySelector('[data-auto="snippet-title-header"]').textContent,
                  component, 
                );
              } catch (error) {}
      
              try {
                componentObj['img'] = await page.evaluate(
                  (el) => el.querySelector("img").src,
                  component
                );
              } catch (error) {}
      
              try {
               let price = await page.evaluate(
                  (el) => {
                   let price = el.querySelector('[data-auto="snippet-price-current"]').textContent.split(":")[1];
                      console.log('price', price);
                     return Number(price?.split('₽')[0].replace(/\s/g,''));
                   
                  },
                  component
                );

                if (Boolean(price)) {
                  componentObj['price'] = price;
                }

              } catch (error) {}
              
              try {
                componentObj['link'] = await page.evaluate((el) => el.querySelector('._1GfBD a').href
                , component)
              } catch (error) {}
    
              try {
               let featuresObj = await page.evaluate((el) => {
                    let featuresList = el.querySelectorAll(".wbBvs._34OXv > ._1CW1P");
                
    
                    let featuresObj = {};
    
                    for (const feature of featuresList) {
                        let key = feature.textContent.split(':')[0];
                        let value = String(feature.textContent.split(':').slice(1)).trim();
                        featuresObj[key] = value;
                    } 
                       
                   return featuresObj;
    
                }, component)

                if (Object.keys(featuresObj).length !== 0) {
                  componentObj['features'] = featuresObj;
                }

              } catch (error) {}
    


              
              if (componentObj['name'] && componentObj['price'] && componentObj['link']) {

                componentsPerPage.push(componentObj)
              }

            }
           }
        )()
        }

    
       
        const is_enabled = await page.$('div[data-auto="pagination-next"]');

   
        console.log('is_enabled', Boolean(is_enabled));
  
        
        if (Boolean(is_enabled)) {
          await scrapeData(page, {idx, url, componentsPerPage: componentsPerPage, pageNumber: pageNumber+1})
        }

        return componentsPerPage;


      } catch (error) {
        console.log(error);
      }
    }
  
    await cluster.task(async ({ page, data: {index: idx, url}}) => {

  
              await page.setExtraHTTPHeaders({
                "user-agent": userAgent,
                "accept":"text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8;q=0.5",
                "accept-encoding": "gzip,deflate,bzip2,sdch",
                "accept-language": " ru-RU,ru,en-US,en;q=0.5,en;q=0.4",
                "Connection": "keep-alive",
            })
            
              await page.setViewport({ width: 1920, height: 1080 });

             const data = await scrapeData(page, {idx, url, componentsPerPage: [], pageNumber: 0})


              const uniqueData = data.reduce((acc, elem) => {
                if (!acc.find((prevElem) => prevElem.name == elem.name || prevElem.link == elem.link)) {
                    acc.push(elem);
                }
                return acc;
            }, []);

             createJson(idx, uniqueData)
    });
  
    for (const key in urls) {
      cluster.queue({index: key, url: urls[key]});
    }


      // await new Promise(r => setTimeout(r, 999999999)).then(
      //     () => console.log(2)
      //     );
    
    await cluster.idle();
    await cluster.close();
  })();