const express = require('express')
const morgan = require('morgan')
const { notFound } = require('./middlewares/checkError')
const db = require('./config/database')
require('dotenv').config()

// Khởi tạo ứng dụng express và bổ sung các middlewares ban đầu để kiểm soát hoạt động
// vào ra dữ liệu của ứng dụng
const app = express()
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Thực hiện định tuyến cơ bản
app.get('/', async(req, resp, next) => {
    try {
        return resp.status(200).json({message: `Welcome to Express server`})
    } catch (error) {
        next(error)
    }
})

app.use('/api/blogs', require('./routes/blog.route'))

// Sử dụng Application Middlewares kiểm soát
app.use(notFound)

// Thực thi ứng dụng express
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running at: http://${process.env.ROOT_PATH}:${process.env.PORT}`)
    // Tiến hành kết nối tới CSDL
    db.connectDb()
})