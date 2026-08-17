import { useState } from 'react'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import SectionTitle from '../common/SectionTitle'
import { company } from '../../content/company'

export default function Contact({ headingAs = 'h2', showHeader = true }) {
  const whatsappNumber = '250788836180'
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'Message could not be sent right now.')
      }

      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (submitError) {
      setStatus('error')
      setError(submitError.message)
    }
  }

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {showHeader ? (
          <SectionTitle
            as={headingAs}
            eyebrow="Contact Us"
            title="Let's build something together"
            description="Tell us about your project and our team will get back to you with clear next steps."
          />
        ) : null}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" value={form.name} onChange={updateField} required />
                <Field label="Email" name="email" type="email" value={form.email} onChange={updateField} required />
              </div>
              <div className="mt-4">
                <Field label="Phone" name="phone" value={form.phone} onChange={updateField} />
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" disabled={status === 'sending'} showIcon={false}>
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </Button>
                {status === 'sent' ? <p className="text-sm font-medium text-emerald-600">Message sent. We will reply soon.</p> : null}
                {status === 'error' ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
                <div className="flex gap-4 border-b border-slate-100 py-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-950">Email</p>
                    <a className="text-sm text-slate-600 hover:text-blue-700" href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
                <div className="flex gap-4 py-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-950">WhatsApp</p>
                    <a className="text-sm text-slate-600 hover:text-blue-700" href={whatsappLink} target="_blank" rel="noreferrer">{company.phone}</a>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-6">
                <MapPin className="h-7 w-7 text-blue-600" />
                <h3 className="mt-3 font-display text-lg font-bold text-slate-950">Gisenyi, Rwanda</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">We build from Rubavu and serve teams in Kigali and across the country.</p>
                <div className="mt-5">
                  <Button href={whatsappLink}>Chat on WhatsApp</Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required = false }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
      />
    </div>
  )
}
