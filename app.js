const express = require("express");
const app = express();
const PORT = 5000;
const sendMail = require("./sendMail");

app.use(express.json());

app.get("/", (req, res) => {
   res.status(200).send("Welcome to the server.")
});

app.get("/mail", sendMail);

const start = async () => {
    try{
      app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
      });   

    } catch(error){
       res.status(500).json({ message: "Internal Server error", error: error.message });
    }
}

start();