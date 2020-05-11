const puppeteer = require('puppeteer')

async function main(){
    try{
        const browser = await puppeteer.launch({headless:false, defaultViewport:null});
        const page = await browser.newPage();
        // Override default user agent 
        page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
        await page.goto('https://allafrica.com/wildlife/');
        // await page.waitForSelector('row no-gutter')
        const newsBoxes = await page.$('.row no-gutter');
        console.log(newsBoxes);
        for (let box of newsBoxes){
            console.log(box)
        }
    }catch(e){
        console.log(e)
    }
}

main()