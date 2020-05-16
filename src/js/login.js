/**
 * 
 * @param {@param: Array}  newslist 
 */
async function addToDOM(newslist){
    // console.log(newslist.postTitle)
    try{
        let cardTitle  = await document.querySelectorAll('.card-title');
        let cardText = await document.querySelectorAll('.card-text');
        let cardImage = await document.querySelectorAll('.card-img-top');
        let CardLink = await document.querySelectorAll('.card-link');
        let nodeCount = 0;
        for (let data of newslist){
            console.log(data)
            if (nodeCount === 12) break;
            cardText[nodeCount].innerText = await data.postContent;
            cardImage[nodeCount].src = await data.postImg;
            CardLink[nodeCount].href = await data.postLink;
            cardTitle[nodeCount].innerText = await data.postTitle;
            cardText[nodeCount].innerText = await data.postContent;
            cardImage[nodeCount].src = await data.postImg;
            CardLink[nodeCount].href = await data.postLink;
            nodeCount ++;
        }
    }catch(e){
        console.log(e);
    }

    
}

fetch('https://earthify.herokuapp.com/news').then(response => {
    return response.json()
}).then(data => addToDOM(data))
.catch(e => {
    console.log(e);
})

