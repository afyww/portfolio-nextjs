// api/sendEmail.js
import Cors from 'cors';
import nodemailer from 'nodemailer';

// Initialize the cors middleware
const cors = Cors({
  methods: ['POST'],
});

export default async function handler(req, res) {
  // Use the middleware
  await cors(req, res);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Retrieve environment variables
  const { GMAIL_USER, GMAIL_PASSWORD } = process.env;

  // Validate existence of environment variables
  if (!GMAIL_USER || !GMAIL_PASSWORD) {
    return res.status(500).json({ message: 'Gmail credentials not provided' });
  }

  // Configure nodemailer to use your Gmail account
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  });

  // Setup email data
  const mailOptions = {
    from: 'your-gmail@gmail.com',
    to: 'afywahyuw@gmail.com', // Change this to your email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Log before sending
    console.log('Sending email:', mailOptions);

    // Send the email
    await transporter.sendMail(mailOptions);

    // Log after sending
    console.log('Email sent successfully');

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
