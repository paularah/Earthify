const mongoose = require('mongoose');
const _ = require('lodash');

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

newsSchema.methods.toJSON = function () {
    const news = this;
    const newsObject = news.toObject();
    return _.pick(newsObject, ['postTitle','postContent', 'postImg', 'postLink']);
}

const News = mongoose.model('news', newsSchema);
module.exports = {News: News};