const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'frontend')));

// Create a transporter object using your email service provider
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/contact', (req, res) => {
  const { firstname, lastname, email, mobno, description } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${firstname} ${lastname}`,
    text: `You have a new contact form submission:\n\n` +
          `First Name: ${firstname}\n` +
          `Last Name: ${lastname}\n` +
          `Email: ${email}\n` +
          `Mobile No: ${mobno}\n` +
          `Description: ${description}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email.');
    }
    console.log('Email sent: ' + info.response);
    res.redirect('/confirmation.html');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
