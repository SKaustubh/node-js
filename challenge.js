// 1.create a new folder named it kaustubh
// 2.create a new file named it ks.txt and insert data into it
// 3.Add more data into the file at the end of the existing data
// 4.Read the data without getting the buffer data at first
// 5.Rename the file name to mybio.txt
// 6.now delete both the file and the folder

//CRUD
// C:- CREATE
// R:- READ
// U:- UPDATE
// D:- DELETE

const fs = require("fs");

//fs.mkdirSync("kaustub_home");//fold3r creation

// fs.writeFileSync("kaustub_home/ks.txt","kaustub");//file creation

// fs.appendFileSync("kaustub_home/ks.txt"," hello ");//add more data
//  const or=fs.readFileSync("kaustub_home/ks.txt","utf-8");

//  console.log(or);// read data without buffer

// fs.renameSync("kaustub_home/kaustub.txt", "kaustub_home/mybio.txt"); //rename file

// fs.rmSync("kaustub_home",{ recursive: true, force: true }); //delete folder

// fs.unlinkSync("test.txt"); //delete file


//  fs.mkdirSync("operating_system"); //create
//  
// fs.mkdirSync("path_modules"); //create a folder

// fs.mkdirSync("importExport"); // create

// fs.mkdirSync("npmMod"); //create a folder

// fs.mkdirSync("ModWrapperFun "); //create a folder

// fs.mkdir("modWrapper", (err) =>{
//     console.log(err);
// });

// fs.mkdirSync("httpSERVER"); //create a folder

// fs.mkdirSync("jsonNODE"); //create a folder

// fs.mkdirSync("eventsModules"); //create a folder

// fs.mkdirSync("streamModules");// Create a folder

fs.mkdirSync("nodemailer");// Create a folder
