import fs from 'fs';

 const createJson = (fileName,scrapedData) => {
    fs.writeFile(`./parserYM/pcComponents/${fileName}.json`, JSON.stringify(scrapedData, null, '\t'), 'utf8', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`The data has been scraped and saved successfully! View it at './pcComponents/${fileName}.json'`);
    });
}

 async function autoScroll(page, maxScrolls){
    await page.evaluate(async (maxScrolls) => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var scrolls = 0;  // scrolls counter
            var scrollHeight = document.body.scrollHeight;
            var distance = Math.round(scrollHeight / maxScrolls);
            var timer = setInterval(() => {
                window.scrollBy(0, distance);
                totalHeight += distance;
                scrolls++;  // increment counter
                console.log(distance);
                // stop scrolling if reached the end or the maximum number of scrolls
                if(totalHeight >= scrollHeight - window.innerHeight || scrolls >= maxScrolls){
                    console.log('clearinterval', scrolls);
                    clearInterval(timer);
                    resolve();
                }
            }, 50);
        });
    }, maxScrolls);
 }

 
 async function getUrls (page) {
  return await page.$$eval('._1jFQq div > a', links => {
       return links.map(link => link.href);
    })
 }


 async function isPaginationNext (page) {
    let nextButtonExist = false;
    try {
      const nextButton = await page.$eval(
        'div[data-auto="pagination-next"]',
        (div) => div.textContent
      );
      nextButtonExist = true;
    } catch (err) {
      nextButtonExist = false;
    }
  

    if (nextButtonExist) {
      await page.click('div[data-auto="pagination-next"]').catch((error) => {
        console.error("not found pagination element");
        return false;
      });
      return true;
    }
 }
 


export {
    createJson,
    autoScroll,
    getUrls,
    isPaginationNext,
}