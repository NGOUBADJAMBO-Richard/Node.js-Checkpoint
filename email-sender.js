// create a file named email-sender  

// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

//     Try to send your self email using this

// Import the nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail service
    auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-email-password'   // Your email password or app-specific password
    }
});

// Setup email data with unicode symbols
let mailOptions = {
    from: '"Your Name" <your-email@gmail.com>', // Sender address
    to: 'recipient-email@example.com', // List of recipients
    subject: 'Hello from Node.js', // Subject line
    text: 'Hello Node.js world!', // Plain text body
    html: '<b>Hello Node.js world!</b>' // HTML body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error: ', error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
