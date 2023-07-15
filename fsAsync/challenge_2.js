// hello
const fs = require('fs');
const { rmdir } = require('fs/promises');

// 1; create folder named it thapa

// fs.mkdir("kaustubh", (err) => {
//     console.log(err);
// });

// 2; create a file in it name bio.txt and add data into it
//   fs.writeFile("kaustubh/bio.txt","helloworld", (err) => {
//     console.log(err);
//   }); 

// 3; add more data into the file at the end of the existing data at first

//   fs.appendFile("kaustubh/bio.txt", "/n messi is the best", (err) => {
//     console.log(err);
//   });

// 4;read the data without getting buffer data at first
    //  fs.readFile("kaustubh/bio.txt","utf-8",(err,data) => {
    //     console.log(data);
    //  });
     
// 5; rename the file name to mybio.txt 

    // fs.rename("mybio.txt","kaustubh/mybio1.txt", (err) => {
    //     console.log(err);});


    // 6; delete the file and folder
        //  fs.unlink("./kaustubh/mybio1.txt" , (err) => {
        //     console.log(err);
        //  }); // file deleted

    // fs.rmdir("kaustubh", (err) => {
    //     console.log(err);}); folder deleted

