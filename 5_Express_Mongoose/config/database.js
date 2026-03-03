const mongoose = require('mongoose')
const Blog = require('../models/blog.model')

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connect to MongoDB successfully')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

// Hình thành đối tượng db chứa các thuộc tính và hành vi trên CSDL
const db = {
    connectDb,
    // DbSet<T>
    Blogs: Blog,
    
}

module.exports = db