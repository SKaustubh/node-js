console.log("hi my name is kaustubh");

const fs = require("fs");
fs.writeFile("fsAsync/index.js", "hello", (err) => {
  console.log("hi my name is kaustubh");
});
