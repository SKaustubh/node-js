const fs = require("fs");
// write the data to the test.txt file
fs.writeFileSync("test.txt", "hello worlddevelopment");
// append the data
const buff = fs.appendFileSync("test.txt", " hi i am fine");

const buf = fs.readFileSync("test.txt");
//node.js has additional datatype called buffer
// (not available in browser's javascript)
// buffer is mainly used for storing binary data
// while reading from a file or receiving packets over the network
console.log(buf);

/* <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 64 65 76 65 6c 6f 70 6d 65 6e 74 20 68 69 20 69 20 61 6d 20 66 69 6e 65> */

org_data = buf.toString();
console.log(org_data);
// hello worlddevelopment hi i am fine