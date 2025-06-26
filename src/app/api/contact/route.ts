import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Eksik bilgi gönderildi." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Elfredy Portfolio <onboarding@resend.dev>",
      to: ["ferid.najafov@gmail.com"], // veya gmail’in, çalışanın hangisiyse
      subject: `Yeni İletişim Mesajı: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Yeni Mesaj</h2>
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Mesaj:</strong><br/>${message}</p>
        </div>
      `,
    });

    if (data?.error) {
      console.error("Resend Hatası:", data.error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sunucu hatası:", error);
    return NextResponse.json(
      { success: false, error: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}