const  express = require('express')
const User = require('../../db/models/news');

const router = express.Router();

router.post("/user", User.create);
router.get("/users", User.find);
router.get("/user/:id",User.findOne);


module.exports = router;