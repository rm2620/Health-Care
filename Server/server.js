const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

//twilio requirements -- Texting API
const accountSid = "AC14cf6f7c7b30e8dd6c008f65c05720a0";
const authToken = "bbdaa45a92ae89552884c9f3dd6eabcb";
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server");
});

//Twilio
app.get("/send-text", (req, res) => {
  //Welcome Message
  res.send("Hello to the Twilio Server");

  //_GET Variables
  const { recipient } = req.query;

  //Send Text
  client.messages
    .create({
      body: "Thank You for your valuable Feedback",
      to: recipient, // Text this number
      from: "19362275816", // From a valid Twilio number
    })
    .then((message) => console.log(message.to));
});

app.listen(4000, () => console.log("Running on Port 4000"));
