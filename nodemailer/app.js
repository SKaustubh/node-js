const express = require("express");
const app = express(); //objext of express
let PORT = 5000;

const sendMail = require("./controllers/sendMail");

app.get("/", (req, res) => {
  res.send("i am a server");
});

app.get("/mails", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}.....`);
    });
  } catch (error) {}
};

start();
