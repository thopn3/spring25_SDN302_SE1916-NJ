const {ptbn, ptbh} = require('./giaiphuongtrinh_sync');
const {ptbn_pm} = require('./giaiphuongtrinh_promise');

// Gọi và thực thi hàm
console.log(`Nghiệm của PT là: ${ptbn(10, 3)}`);
console.log(`Nghiệm của PT là: ${ptbn(0, 0)}`);
console.log(`Nghiệm của PT là: ${ptbn(0, 5)}`);

ptbn_pm(4,10)
    .then(result => console.log(result))
    .catch(error => console.log(error));