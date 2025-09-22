import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  surname: string;
  email: string;
  message: string;
  gdprConsent: boolean;
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, surname, email, message, gdprConsent } = body;

    if (!name || !surname || !email || !message || !gdprConsent) {
      return NextResponse.json(
        { error: "Všechna pole jsou povinná a musíte souhlasit se zpracováním osobních údajů." },
        { status: 400 }
      );
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Neplatná e-mailová adresa." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_PORT === "465",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_HOST,
      to: process.env.FORM_RECIPIENT_EMAIL,
      subject: `Nová zpráva z kontaktního formuláře od ${name} ${surname}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Příjmení:</strong> ${surname}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p><em>Odesláno: ${new Date().toLocaleString("cs-CZ")}</em></p>
      `,
      text: `
          Nová zpráva z kontaktního formuláře

          Jméno: ${name}
          Příjmení: ${surname}
          E-mail: ${email}
          Zpráva: ${message}

          Odesláno: ${new Date().toLocaleString("cs-CZ")}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Zpráva byla úspěšně odeslána!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Došlo k chybě při odesílání zprávy. Zkuste to prosím později." },
      { status: 500 }
    );
  }
}
