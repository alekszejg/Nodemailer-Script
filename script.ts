import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, 
    },
});


async function sendEmail(serviceUsed: "gmail", subject: string, text: string) {
    switch (serviceUsed) {
        case "gmail":
            try {
                const info = await transporter.sendMail({
                    from: process.env.EMAIL_USER, // in .env file initiate EMAIL_USER=<some value>
                    to: process.env.EMAIL_RECEIVER, // // in .env file initiate EMAIL_RECEIVER=<some value>
                    subject: subject,
                    text: text, 
                });
        
                console.log('Message sent: %s', info.messageId);
            } catch (error) {
                console.error('Error sending email:', error);
            }
            break;
        default:
            console.error("Service doesn't match. Service values available: 'gmail'.")
    }
} 

sendEmail("gmail", "<your subject>", "<your text/body>");


    