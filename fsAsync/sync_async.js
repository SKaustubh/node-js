const fs = require('fs');


// const data =fs.readFileSync("read.txt", "utf-8");
// console.log(data); // synchronously
// console.log("Writing unnecessary stuff just checking synchronous calling");


fs.readFile("read.txt","utf-8",(err,data) =>{
    console.log(data);
})


console.log("Writing unnecessary stuff just checking asynchronous calling");