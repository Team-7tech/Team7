import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Globe } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { contactData } from '../config/contactData';

const InstagramIcon: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: contactData.inquiryTypes[0],
    message: ''
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be 100 characters or less';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) || formData.email.length > 100) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message must be 2000 characters or less';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    // Spam honeypot check: if filled, fail silently / pretend sent without dispatching
    if (honeypot) {
      setIsSent(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/harshitlawrenc@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          inquiryType: formData.inquiryType,
          message: formData.message.trim(),
          _subject: `Syntax Verse Inquiry - ${formData.inquiryType}`,
          _captcha: 'true'
        })
      });

      let isSuccess = false;
      if (response.ok) {
        try {
          const resData = await response.json();
          if (resData && (resData.success === 'true' || resData.success === true || response.status === 200)) {
            isSuccess = true;
          }
        } catch {
          isSuccess = response.status === 200;
        }
      }

      if (isSuccess) {
        setIsSent(true);
      } else {
        setSubmitError('Unable to send your message. Please try again.');
      }
    } catch {
      setSubmitError('Unable to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding-compact" style={{ position: 'relative' }}>
      <Container>
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something."
          subtitle="Have questions about Syntax Verse, sponsorship opportunities, or technical collaboration? Team7 is ready to assist."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Info — Frosted White Glass Container */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            <div>
              <span className="badge badge-glass" style={{ marginBottom: '0.75rem' }}>TEAM7 INQUIRIES</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Connect with the Organizers
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.5rem', lineHeight: 1.6 }}>
                We welcome inquiries from participants, student organizations, mentors, and corporate partners interested in supporting Syntax Verse.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0
                  }}
                >
                  <Mail style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>EMAIL CONTACT</span>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                    {contactData.emailPlaceholder}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>{contactData.emailNote}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0
                  }}
                >
                  <MapPin style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>LOCATION</span>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                    {contactData.location}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>Event venue to be announced</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>
                SOCIAL CHANNELS
              </span>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {contactData.socialLinks.instagram && (
                  <a
                    href={contactData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'transform 200ms ease, background 200ms ease, border-color 200ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    }}
                    aria-label="Instagram"
                  >
                    <InstagramIcon style={{ width: '18px', height: '18px' }} />
                  </a>
                )}
                {contactData.socialLinks.linkedin && (
                  <a
                    href={contactData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'transform 200ms ease, background 200ms ease, border-color 200ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    }}
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon style={{ width: '18px', height: '18px' }} />
                  </a>
                )}
                {contactData.socialLinks.github && (
                  <a
                    href={contactData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'transform 200ms ease, background 200ms ease, border-color 200ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    }}
                    aria-label="GitHub"
                  >
                    <Globe style={{ width: '18px', height: '18px' }} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form — Frosted White Glass Container */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem'
            }}
          >
            {!isSent ? (
              <form onSubmit={handleSubmit} noValidate>
                {/* Anti-Spam Hidden Honeypot Input */}
                <input
                  type="text"
                  name="_honey"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                    Send a Message
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.25rem' }}>
                    Fill out the form below and Team7 will respond to your email address.
                  </p>
                </div>

                {submitError && (
                  <div
                    style={{
                      marginBottom: '1.25rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#f87171',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <AlertCircle style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    maxLength={100}
                    className="form-input"
                    placeholder="e.g. Pranjal Sukhla"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && (
                    <span style={{ fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                      <AlertCircle style={{ width: '12px', height: '12px' }} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    maxLength={100}
                    className="form-input"
                    placeholder="pranjal23@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                      <AlertCircle style={{ width: '12px', height: '12px' }} /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Topic / Inquiry Type</label>
                  <select
                    name="inquiryType"
                    className="form-select"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  >
                    {contactData.inquiryTypes.map((type) => (
                      <option key={type} value={type} style={{ background: '#090a0f', color: '#ffffff' }}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    maxLength={2000}
                    className="form-textarea"
                    rows={4}
                    placeholder="How can Team7 help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && (
                    <span style={{ fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                      <AlertCircle style={{ width: '12px', height: '12px' }} /> {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 style={{ width: '18px', height: '18px', animation: 'spin 1s linear infinite' }} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send style={{ width: '18px', height: '18px' }} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto',
                    color: '#ffffff'
                  }}
                >
                  <CheckCircle2 style={{ width: '28px', height: '28px' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.5rem', lineHeight: 1.6 }}>
                  Thank you for reaching out, {formData.name}. Team7 will review your inquiry regarding "{formData.inquiryType}" and respond shortly.
                </p>
                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', inquiryType: contactData.inquiryTypes[0], message: '' });
                    setSubmitError(null);
                    setIsSent(false);
                  }}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
