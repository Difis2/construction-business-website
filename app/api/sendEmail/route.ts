import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

require("dotenv").config();

export async function POST() {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3",
      },
    });

    const mailOption = {
      from: "diogo.soares.dev@outlook.com", // Sender address
      to: "diogofgsoares@gmail.com", // List of recipients
      subject: "Node Mailer", // Subject line
      text: "Hello People!, Welcome to Bacancy!", // Plain text body
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
