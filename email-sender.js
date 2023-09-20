const nodemailer = require("nodemailer");

async function sendEmail() {
  try {
    // Create a transporter using your SMTP server's configuration
    let transporter = nodemailer.createTransport({
      service:"gmail", // Replace with your SMTP server addre, // Default SMTP port for secure connection
      secure: false, // Change to true if using a secure connection (e.g., TLS)
      auth: {
        user:  "cyrinebentaazayet1@gmail.com", // Use environment variables for email and password
        pass: "keku qdrw gpmo nysr",
      },
    });

    // Define your email content
    let mailOptions = {
      from: "cyrinebentaazayet1@gmail.com",
      to: "cyrinebentaazayet2@gmail.com",
      subject: "Hello, this is a test email",
      text: "Hello, this is a test email sent from Node.js using Nodemailer.",
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error occurred: " + error.message);
  }
}

sendEmail();
