const fs = require("fs");
const biData = {
  name: "kaustubh",
  age: 21,
  sports: "cricket",
}; // object

const jsonData = JSON.stringify(biData);
console.log(jsonData);

//{"name":"kaustubh","age":21,"sports":"cricket"} //json

const objData = JSON.parse(jsonData); // json to object

// {"name":"kaustubh","age":21,"sports":"cricket"}//object

// 1.convert to json
// const json= JSON.stringify(biData);

// 2. add in second file
// fs.writeFile("json1.json",json,(err)=>{
//     console.log(err)
// });

// 3.readfile
// fs.readFile("json1.json", "utf-8", (err, data) => {
//   console.log(data);
//   const origin = JSON.parse(data); // 4.convert to object
//   console.log(origin); // print object
// });
