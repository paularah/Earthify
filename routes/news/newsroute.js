const router = require('express').Router()
const News = require('../../db/models/news').News

router.get('/news', (req, res) => {
    console.log('news route hit')
    News.find().then(data => {
        res.status(200).send(data);
    }).catch( e => {
        console.log(`error with newsroutes ${e}`)
    });
})

module.exports = router;