const mongoose = require('mongoose')

// Định nghĩa cấu trúc dữ liệu (schema) của Blog
const blogSchema = new mongoose.Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    comments: [{
        user: String,
        body: String,
        votes: Number
    }]
}, {timestamps:true})

// Tạo model theo kiểu cấu trúc dữ liệu trên
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog