const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        let fileUrl = ''
        // Kiểm tra đường dẫn của url -> Nhận index.html là default page nếu url là: /
        if (req.url === '/')
            fileUrl = '/index.html'
        else
            fileUrl = req.url

        // Xác định đường dẫn tới các html file
        const filePath = path.resolve('./public' + fileUrl)
        const fileExt = path.extname(filePath)
        // Kiểm tra định dạng file (.html hay định dạng khác)
        if (fileExt === '.html')
            fs.exists(filePath, exist => {
                if (!exist) {
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/plain')
                    res.end('Tài nguyên này không tồn tại')
                    return;
                }
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                fs.createReadStream(filePath).pipe(res)
            })
        else {
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/plain')
            res.end('Không đúng đúng định dạng HTML')
        }
    }
    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('Phương thức này không hỗ trợ')
    }
})


server.listen(9999, () => {
    console.log(`Server running at: http://localhost:9999`)
})

