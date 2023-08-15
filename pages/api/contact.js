import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  // Destructure the form data
  const { firstName, lastName, email, message } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'your-smtp-server.com', // Replace with your SMTP server
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your-username', // Replace with your email username
      pass: 'your-password', // Replace with your email password
    },
  });

  // Define the email data
  const mailData = {
    from: 'your-email@example.com', // Sender address
    to: 'recipient@example.com', // List of recipients
    subject: `Contact from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailData);
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ status: 'error', error: error.message });
  }
}
