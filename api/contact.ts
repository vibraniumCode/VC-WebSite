import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' })
  }

  // Configuración del transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"VibraniumCode" <${process.env.GMAIL_USER}>`,
      to: 'vibraniumcode@gmail.com',
      subject: `Nuevo contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje desde VibraniumCode</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    })

    return res.status(200).json({ success: true })

  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Error al enviar el mail' })
  }
}