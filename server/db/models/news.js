const mongoose = require('mongoose');

let newsSchema = new mongoose.Schema({
    postTitle:{
        type: String,
        required: true
    },

    postContent:{
        type: String,
        required: true
    },
    
    postLink:{
        type: String,
        required: true
    },

    postImg: {
        type: String,
        required: true
    }
})

const News = mongoose.model('news', newsSchema);
module.exports = {News: News};