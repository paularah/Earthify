const mongoose = require('mongoose');

let newsSchema = new mongoose.Schema({
    headline:{
        type: String,
        required: true
    },

    body:{
        type: String,
        required: true
    },
    
    source:{
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    timeStamp:{
        type: String,
        required: true
    }
})

const News = mongoose.model('news', newsSchema);
module.exports = {News: News};