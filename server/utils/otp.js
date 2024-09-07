const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
}


const sendOtp = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP for verification is ${otp}`
    };

    await transporter.sendMail(mailOptions);
    return true;
}

module.exports = {sendOtp,generateOtp}