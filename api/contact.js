import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { firstName, lastName, email, message } = req.body;

  // Create a transporter object using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailData = {
    from: `Web Cheddar Web Solutions <${process.env.SMTP_USER}>`, // Ensure this matches your SMTP user
    to: `scott@webcheddar.ca`, 
    subject: `Contact from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ status: 'error', error: error.message });
  }
}
