import nodemailer from 'nodemailer'

export default async function ContactAPI(req, res) {
  const { name, email, number, message } = req.body

  const user = process.env.EMAIL_NODEMAILER

  const data = {
    name,
    email,
    number,
    message,
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.EMAIL_NODEMAILER_PSWD,
    },
  })

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: 'elibioebianchini@contato.com',
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Number: ${number}</p>
        <p>Message: ${message}</p>
      `,
    })

    console.log('Message sent:', mail.messageId)

    return res.status(200).json({ message: 'Success' })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Could not send the email. Your message was not sent.',
    })
  }
}
