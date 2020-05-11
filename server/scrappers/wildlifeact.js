const puppeteer = require('puppeteer');

async function main(){
    try{
        const browser = await puppeteer.launch({headless:false, defaultViewport:null});
        const page = await browser.newPage();
        // Override default user agent 
        page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
        await page.goto('https://wildlifeact.com/blog/');
        page.waitForSelector('.row-spacer');
        const articles =  await page.$$('.row-spacer article');
        for (const article of articles){
            const postImg = await article.$eval('.wla-h-card__image img', img => img.getAttribute('src'));
            const postLink = await article.$eval('.link--silent', a => a.getAttribute('href'));
            const postTitle =  await article.$eval('.link--silent', a => a.innerHTML);
            const postContent  = await article.$('.wla-h-card__content').parentNode;
            const tets = await postContent.innerHTML;
            // console.log(postContent);
            console.log(tets);
        }
    }catch(e){
        console.log(e)
        
    }
} 

main()