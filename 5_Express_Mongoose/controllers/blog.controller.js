// Actions: CRUD
const db = require('../config/database')

// 1. Create new Blog
const createBlog = async (req, resp, next) => {
    try {
         // Lấy dữ liệu từ request của client
        const {title, slug, published, author, content, tags, comments} = req.body
        // Khởi tạo đối tượng kiểu Blog
        const newBlog = new db.Blogs({title, slug, published, author, content, tags, comments})

        // Lưu dữ liệu vào DB
        await newBlog.save()
            .then(newDoc => {
                return resp.status(201).json(newDoc)
            })
            .catch(err => next(err))
    } catch (error) {
        next(error)
    }
}

// 2. Get all Blog


module.exports = { createBlog, }

