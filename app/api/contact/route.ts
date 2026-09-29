import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name ?? "").trim()
    const email = String(body.email ?? "").trim()
    const phone = String(body.phone ?? "").trim()
    const message = String(body.message ?? "").trim()

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 })
    }

    const smtpUser = process.env.SMTP_USER || "your-gmail@gmail.com"
    const smtpPassword = process.env.SMTP_PASSWORD || "your-16-character-app-password"
    const recipient = process.env.CONTACT_TO_EMAIL || smtpUser

    if (smtpUser.startsWith("your-") || smtpPassword.startsWith("your-")) {
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Add your Gmail App Password in the project environment variables." },
        { status: 503 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: smtpUser, pass: smtpPassword },
    })

    await transporter.sendMail({
      from: `Website enquiry <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Contact email failed", error)
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 })
  }
}
