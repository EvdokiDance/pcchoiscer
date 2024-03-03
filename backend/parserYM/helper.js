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



 const generateRandomUA = () => {
  // Array of random user agents
  const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15'
  ];
  // Get a random index based on the length of the user agents array
  const randomUAIndex = Math.floor(Math.random() * userAgents.length);
  // Return a random user-agent using the index above
  return userAgents[randomUAIndex];
};




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
    generateRandomUA,
}