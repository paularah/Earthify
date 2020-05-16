const puppeteer = require('puppeteer');
const News = require('../db/models/news').News;
async function main(){
    try{
        let allNews = []
        const browser = await puppeteer.launch({headless:true, defaultViewport:null, args:[
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
            '--single-process'
        ]});
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0); 
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
            console.log(news)
            await allNews.push(news)
        }
        await allNews.forEach(collection => {
            const each = new News(collection);
            each.save().then( doc => {
                console.log('saving news from mongobay')
            }).catch(e => {
                console.log(`error trying to save news from mongobay ${e}`);
            })

        })
        
    }catch(e){
        console.log(e)
        
    }
} 

main()
