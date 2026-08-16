import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import nodemailer from 'nodemailer'
import { applyPageSeoToHtml, knownPaths } from '../src/content/seo.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = Number(process.env.PORT || 4174)
const distDir = path.resolve(__dirname, '../dist')

app.set('trust proxy', true)
app.use(express.json({ limit: '20kb' }))

app.use((req, res, next) => {
  const host = req.headers.host
  const forwardedProto = req.headers['x-forwarded-proto']
  const protocol = Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto

  if (host === 'www.eserveconn.com' || (host === 'eserveconn.com' && protocol === 'http')) {
    return res.redirect(301, `https://eserveconn.com${req.originalUrl}`)
  }

  next()
})

const requiredMailEnv = ['CONTACT_TO', 'MAIL_FROM', 'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS']

function hasMailConfig() {
  return requiredMailEnv.every((key) => process.env[key])
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || 'true') === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    serverName: process.env.SERVER_NAME || null,
  })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, phone = '', message } = req.body || {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!name || !email || !message || !emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid name, email, and message.' })
  }

  if (!hasMailConfig()) {
    return res.status(503).json({ error: 'Email service is not configured.' })
  }

  try {
    const transporter = buildTransport()
    const cleanName = escapeHtml(name)
    const cleanEmail = escapeHtml(email)
    const cleanPhone = escapeHtml(phone)
    const cleanMessage = escapeHtml(message).replace(/\n/g, '<br>')

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Eserveconn contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        '',
        message,
      ].filter(Boolean).join('\n'),
      html: `
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        ${phone ? `<p><strong>Phone:</strong> ${cleanPhone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${cleanMessage}</p>
      `,
    })

    res.json({ ok: true })
  } catch (error) {
    console.error('Contact email failed:', error)
    res.status(500).json({ error: 'Message could not be sent right now.' })
  }
})

if (fs.existsSync(distDir)) {
  app.use(express.static(distDir, { index: false }))
}

app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next()
  }

  const indexFile = path.join(distDir, 'index.html')

  if (fs.existsSync(indexFile)) {
    const pathname = req.path.length > 1 && req.path.endsWith('/') ? req.path.slice(0, -1) : req.path || '/'
    const html = applyPageSeoToHtml(fs.readFileSync(indexFile, 'utf8'), pathname)
    const status = knownPaths.includes(pathname) ? 200 : 404
    return res.status(status).type('html').send(html)
  }

  res.status(404).send('Build output not found. Run npm run build first.')
})

app.listen(port, () => {
  console.log(`Eserveconn server listening on port ${port}`)
})
