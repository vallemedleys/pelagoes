import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();
const port = 5174;

app.use(express.urlencoded({ extended: false }));

app.post('/send-email', (req, res) => {
  console.log("Received a request to /send-email")
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});
      


  const mailOptions = {
    from: req.body.email,
    to: 'testrunemail1234@example.com',
    subject: 'New message from ' + req.body.name,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
