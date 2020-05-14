const puppeteer = require('puppeteer');
// const {News} =  require('./db/models/news');

async function main(){
    try{

        let news  = {
            headline: null,
            imgSrc: null,
            link: null,
            content: null
            
        }
        const browser = await puppeteer.launch({headless:false, defaultViewport:null});
        const page = await browser.newPage();
        // Override default user agent 
        page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
        await page.goto('https://africanconservation.org/news/');
        page.waitForSelector('.et_pb_salvattore_content');
        const cols  = await page.$('.et_pb_salvattore_content div')
        for (const article of cols){
            const postImg = await article.$eval('.wla-h-card__image img', img => img.getAttribute('src'));
            console.log(postImg);
        }
        // const col1 = await page.$('.column size-1of2');
        // console.log(col1);

    //     for(const block of news){
    //         console.log(await block.$$('column size-1of2'))
    //     }
    }catch(e){
        console.log(e)
        
    }
} 

main()