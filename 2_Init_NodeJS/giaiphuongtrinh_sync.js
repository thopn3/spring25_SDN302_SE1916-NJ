// Viết 1 hàm xử lý bài toán giải phương trình bậc nhất: ax + b = 0
const ptbn = (a,b) => {
    if(a==0){
        if(b==0){
            return "Phương trình vô số nghiệm";
        }else{
            return "Phương trình vô nghiệm";
        }
    }else{
        let x = -b/a;
        return x.toFixed(2);
    }
}

function ptbh(){

}

module.exports = {ptbn, ptbh};