import { useRef, useState } from 'react'

export default function ContactSection() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate async send
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', project: '', message: '' })
    }, 1200)
  }

  return (
    <section className="contact-section border-t section-pad" id="contact">
      <div className="container contact-inner">

        {/* Left: heading */}
        <div className="contact-heading">
          <span className="label-text" style={{ display: 'block', marginBottom: '1.5rem' }}>
            Contact
          </span>
          <h2 className="contact-title">
            Let's create<br /><em>something
            <br />extraordinary.</em>
          </h2>
          <p className="body-text contact-sub">
            Reach out with your project details and we'll get back to you within 24 hours.
          </p>
          <div className="contact-info">
            <p className="label-text">Email</p>
            <a href="mailto:contact@infinityplus.com" className="body-text contact-email">
              contact@infinityplus.com
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-row">
            <div className="form-group">
              <label className="label-text form-label" htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="label-text form-label" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="label-text form-label" htmlFor="contact-project">
              Project type
            </label>
            <select
              id="contact-project"
              name="project"
              value={form.project}
              onChange={handleChange}
              className="form-input form-select"
            >
              <option value="">Select a service</option>
              <option value="fashion">Fashion & Editorial</option>
              <option value="portrait">Portrait & Identity</option>
              <option value="gastro">Fine Dining & Gastronomy</option>
              <option value="campaign">Campaign & Retouching</option>
              <option value="product">Product Photography</option>
              <option value="custom">Custom Project</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-text form-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your project..."
              required
              className="form-input form-textarea"
            />
          </div>

          <button
            type="submit"
            className={`form-submit ${status === 'sending' ? 'form-submit-loading' : ''}`}
            disabled={status !== 'idle'}
          >
            {status === 'idle' && 'Send message →'}
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && '✓ Message sent!'}
          </button>

          {status === 'sent' && (
            <p className="form-success body-text">
              Thank you! We'll be in touch shortly.
            </p>
          )}
        </form>

      </div>
    </section>
  )
}
