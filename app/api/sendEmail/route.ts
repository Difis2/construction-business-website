import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

require("dotenv").config();

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log(data);
    const {
      name,
      email,
      message,
      phone,
      initialDate,
      value,
      address,
      area,
      service,
      intervencion,
    } = data;
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
      recipient: email,
      subject: "Pedido de Informações",
      // html: `
      //   <div class="container">
      //     <h1>Solicitação de Orçamento</h1>
      //     <p>Olá o meu nome é ${name},</p>
      //     <p>
      //       ${message}
      //     </p>
      //     <p>

      //     </p>
      //     <p>Cumprimentos, Robust&Fabulous, Lda</p>
      //   </div>`
      html: `
      <div class="container">
      <h1>Solicitação de Informações</h1>
        ${name ? `<p><strong>Nome:</strong> ${name}</p>` : ""}
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ""}
        ${
          value ? `<p><strong>Valor de Investimento:</strong> ${value}</p>` : ""
        }
        ${address ? `<p><strong>Morada:</strong> ${address}</p>` : ""}
        ${area ? `<p><strong>Área de Intervenção:</strong> ${area}</p>` : ""}
        ${service ? `<p><strong>Tipo de Serviço:</strong> ${service}</p>` : ""}
        ${
          intervencion
            ? `<p><strong>Tipo de Intervenção:</strong> ${intervencion}</p>`
            : ""
        }
        ${
          initialDate
            ? `<p><strong>Previsão de Início:</strong> ${initialDate.substring(
                0,
                10
              )}</p>`
            : ""
        }
        ${message ? `<p><strong>Mensagem:</strong> ${message}</p>` : ""}
        <p>Cumprimentos, <br/> ${name}</p>
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
