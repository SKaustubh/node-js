const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  // connect to smtp server

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "willy89@ethereal.email",
      pass: "rB7DnX6kfrcvVmrauR",
    },
  });

  let info = await transporter.sendMail({
    from: '"Kaustubh singh " <kaustubhsingh37@gmail.com>', // sender address //<iske under khuch bhi password dal skte ho></iske>
    to: "kaustubhsingh718@gmail.com", // list of receivers
    subject: "you r a lovely human", // Subject line
    text: "greetings", // plain text body
    html: "<b>kaustubh is great</b>", // html body
  });

    console.log("message sent: %s", info.messageId);
    res.json(info);
  res.send("hello");
};

module.exports = sendMail;
