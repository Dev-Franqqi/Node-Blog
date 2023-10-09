const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const myBlogSchema = new Schema({
    title:{
        type:String,
        requied:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String
        ,required:true
    }
},{timestamps:true});

const Blog = mongoose.model('Blog',myBlogSchema);

module.exports= Blog;