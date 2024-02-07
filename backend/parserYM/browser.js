import puppeteer from 'puppeteer';


 async function startBrowser() {
    const browser = await puppeteer.launch({headless: true, 'ignoreHTTPSErrors': true,   args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--deterministic-fetch',
        '--disable-features=IsolateOrigins',
        '--disable-site-isolation-trials',
        // '--single-process',
    ],});
    
    return browser;
}



export  {
    startBrowser,
}