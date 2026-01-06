// Khai báo module sử dụng tạo web server
const http = require("http");
// Khai báo cấu hình cho web server
const hostname = "localhost";
const port = 9999;

// Khởi tạo đối tượng web server
const server = http.createServer((req, res) => {
    // Log thông tin của client
    console.log(`${req.method}: ${req.url}`);
    // Thiết lập đối tượng trả về cho client
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World! Welcome to NodeJS WebServer");
});

// Lắng nghe các yêu cầu từ client
server.listen(port, () => {
    console.log(`Server running at: http://${hostname}:${port}`);
});