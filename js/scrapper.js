const puppeteer = require('puppeteer');

(async function main(){
    try{

        const browser = await puppeteer.launch({headless: false});
        const page  = await browser.newPage();

        await page.goto('https://news.mongabay.com/list/africa/');
        await page.waitForNavigation();
        
    }catch(e){
        console.log('The error ', e);
    }
}

)();