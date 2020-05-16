const router = require('express').Router();
const path = require('path');

const adminPath = path.resolve(__dirname, '../', '../','src', 'admin');

router.get('/super', (req, res) => {
    console.log('admin path hit')
    res.sendFile(adminPath+'/index.html');
})

module.exports = router;