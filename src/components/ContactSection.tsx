import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Globe, MessageSquare } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { contactData } from '../config/contactData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: contactData.inquiryTypes[0],
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
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
              gap: '2rem',
              background: 'rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.16)'
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
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {contactData.socialLinks.github && (
                  <a
                    href={contactData.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                    aria-label="GitHub"
                  >
                    <Globe style={{ width: '18px', height: '18px' }} />
                  </a>
                )}
                {contactData.socialLinks.linkedin && (
                  <a
                    href={contactData.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                    aria-label="LinkedIn"
                  >
                    <MessageSquare style={{ width: '18px', height: '18px' }} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form — Frosted White Glass Container */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.16)'
            }}
          >
            {!isSent ? (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                    Send a Message
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.25rem' }}>
                    Fill out the form below and Team7 will respond to your email address.
                  </p>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Jordan Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && (
                    <span style={{ fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <AlertCircle style={{ width: '12px', height: '12px' }} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="jordan@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <AlertCircle style={{ width: '12px', height: '12px' }} /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Topic / Inquiry Type</label>
                  <select
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
                    className="form-textarea"
                    rows={4}
                    placeholder="How can Team7 help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && (
                    <span style={{ fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
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
