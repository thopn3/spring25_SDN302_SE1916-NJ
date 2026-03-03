const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const { notFound } = require('./middlewares/checkerror')

const app = express()

app.use(morgan("dev"))
// Kiểm soát kiểu dữ liệu cho request|response -> theo định dạng JSON (Serialize, Deserialize)
app.use(express.json())
// Tiếp nhận dữ liệu từ Form data
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('Welcome to Express server')
})

app.use('/api/users', require('./routes/user.route'))

app.use(notFound)

const port = process.env.PORT
const host = process.env.HOSTNAME
app.listen(port, () => {
    console.log(`Server running at: http://${host}:${port}`)
})