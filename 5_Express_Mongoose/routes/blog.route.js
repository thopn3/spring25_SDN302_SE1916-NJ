const express = require('express')
const { createBlog } = require('../controllers/blog.controller')

const router = express.Router()

// Định nghĩa end-point(s) định tuyến cho các chức năng
// POST /api/blogs/create
router.post('/create', createBlog)

// ....


module.exports = router