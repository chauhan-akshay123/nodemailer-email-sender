const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    try{   
      let testAccount = await nodemailer.createTestAccount();
      
      // connect with the smtp
      let transporter = await nodemailer.createTransport({
         host: "smtp.ethereal.email",
         port: 587,
         auth: {
          user: 'karlie.turcotte22@ethereal.email', // generated ethereal user
          pass: 'BTs5pwyXBktsNcaZNc'  // generated ethereal password
         },
      });

      const info = await transporter.sendMail({
        from: '"Akshay Chauhan 👻" <mybattlefield95@gmail.com>', // sender address
        to: " chauhanakshay395@gmail.com", // list of receivers
        subject: "Hello Akshay", // Subject line
        text: "Hello Akshay nodemailer running", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);

      res.status(200).json(info);
    } catch(error){
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send email");
    }
}

module.exports = sendMail;