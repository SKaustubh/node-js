// operating_system

const os = require ("os")
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// const freeM = os.freemem();
// console.log(`${freeM /1024/1024/1024}`+" gb "+"free");

// const total = os.totalmem();
// console.log(`${total / 1024/1024/1024}`+" gb "+"total");