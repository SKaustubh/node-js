// hello

// we pass them a function as an argument  to callback
// that gets called when that task completes
// the callback has an argument that tells you whether
// the operation completed successfully
// has copeted (even if it's nothing ), and start
// checking for errors.


const fs=require("fs");

// fs.appendFile("read.txt","plz symmetry ", (err) => {
//     console.log("yo");}
//     );

// fs.readFile("read.txt","UTF-8", (err,data) => {
//     console.log(data);
// });

// fs.writeFileSync("sync_async.js","hello world ");

// fs.appendFileSync("read.txt","hello just fro checking");

fs.writeFile("challenge_2.js","hello", (err) => {
    console.log(err);
});