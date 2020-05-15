const router = require('express').Router();
const path = require('path');

const staticDir = path.resolve(__dirname, 'src');
console.log(staticDir);

router.get('/', (req, res) => {
    res.sendFile(staticDir+'/index.html'); 
})

module.exports = router;