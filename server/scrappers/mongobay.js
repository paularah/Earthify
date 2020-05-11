const puppeteer = require('puppeteer');

async function main(){
    try{
        let allNews = []
        const browser = await puppeteer.launch({headless:false, defaultViewport:null});
        const page = await browser.newPage();
        // Override default user agent 
        page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
        await page.goto('https://news.mongabay.com/list/africa/');
        page.waitForSelector('#post-wrapper-news');
        const articles = await page.$$('#post-wrapper-news article');
        for(const article of articles){
            const header = await article.$('.post-title-news')
            const postTitle = await header.$eval('a', a => a.innerHTML)
            const postLink = await header.$eval('a', a => a.getAttribute('href'))
            const postContent = await article.$eval('.excerpt-news', div => div.innerHTML)
            const postImg = await article.$eval('.hidden-md-up img', image => image.getAttribute('src'));
            let news  = await {
                postTitle,
                postImg,
                postLink,
                postContent
            }
            await allNews.push(news)
        }
        await console.log(allNews);
        
    }catch(e){
        console.log(e)
        
    }
} 

main()
