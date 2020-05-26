const acf = require('./acf');
const monogobay = require('./mongobay');
const wildlifeact = require('./wildlifeact');

async function startScrappers(){
    try{
        acf()
        monogobay()
        wildlifeact()
    }catch(e){
        console.log(`Error startinng scarappers`)
    }
}


module.exports = startScrappers;