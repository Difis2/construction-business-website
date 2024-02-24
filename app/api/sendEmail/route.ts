import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

require("dotenv").config();

type ResponseData = {
  email: string;
  name: string;
  message: string;
};

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    console.log(req.body.name);
    const { name, email, message } = req.body;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOption = {
      from: "geral.robustfabulos@gmail.com",
      to: email,
      subject: "Pedido de Informações",
      html: `
        <div class="container">
          <h1>Solicitação de Orçamento</h1>
          <p>Hello ${name},</p>
          <p>
            This is a sample email template. You can customize it as needed.
          </p>
          <p>
          ${message}
          </p>
          <p>Thank you!</p>
        </div>`,
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
