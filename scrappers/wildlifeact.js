const puppeteer = require('puppeteer');

async function main(){
    try{
        const browser = await puppeteer.launch({headless:false, defaultViewport:null});
        const page = await browser.newPage();
        // await page.setDefaultNavigationTimeout(0); 
        // Override default user agent 
        page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
        await page.goto('https://wildlifeact.com/blog/');
        page.waitForSelector('.row-spacer');
        const articles =  await page.$$('.row-spacer article');
 
        for (const article of articles){
            const postImg = await article.$eval('.wla-h-card__image img', img => img.getAttribute('src'));
            const postLink = await article.$eval('.link--silent', a => a.getAttribute('href'));
            const postTitle =  await article.$eval('.link--silent', a => a.innerHTML);
            const postContent  = await article.$eval('.wla-h-card__content h2', div => {
                console.log(div.innerText);
                console.log('in here');
            } )  
            // console.log(postContent);      
            
        }
    }catch(e){
        console.log(e)
        
    }
} 

main()