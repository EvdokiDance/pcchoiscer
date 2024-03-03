import puppeteer from 'puppeteer';
// import stealthPlugin from 'puppeteer-extra-plugin-stealth';


// puppeteer.use(stealthPlugin());

 async function startBrowser() {
    const browser = await puppeteer.launch({headless: false, 'ignoreHTTPSErrors': true,   
    args: ['--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--deterministic-fetch',
    '--disable-features=IsolateOrigins',
    '--disable-site-isolation-trials']});
    
    return browser;
}



export  {
    startBrowser,
}