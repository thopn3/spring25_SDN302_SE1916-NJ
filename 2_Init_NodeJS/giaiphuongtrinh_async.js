// Hàm xử lý theo hình thức bất đồng bộ sử dụng callback
const ptb1 = (a, b, callback) => {
    if(a==0)
        if(b==0)
            callback("PT vô số nghiệm", null)
        else
            callback("PT vô nghiệm", null)
    else
        callback(null, (-b/a).toFixed(2))
}

// Hạn chế: TH chức năng phức tạp (gọi lồng nhiều chức năng khác) -> Callback Hell

module.exports = {ptb1}