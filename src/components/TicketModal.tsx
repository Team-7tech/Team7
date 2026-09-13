import React, { useState } from 'react';
import { X, CheckCircle2, Ticket, AlertCircle, Loader2 } from 'lucide-react';
import { eventData } from '../config/eventData';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'College or Organization is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API registration request latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', phone: '', organization: '' });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(3, 3, 4, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={handleReset}
    >
      {/* Frosted White Glass Modal Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '2.25rem',
          position: 'relative',
          background: 'rgba(18, 20, 28, 0.9)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          color: '#ffffff',
          borderRadius: '18px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            color: 'rgba(255, 255, 255, 0.7)',
            padding: '0.4rem',
            cursor: 'pointer'
          }}
        >
          <X style={{ width: '20px', height: '20px' }} />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Ticket style={{ width: '18px', height: '18px', color: '#ffffff' }} />
                <span className="badge badge-glass">PRE-REGISTRATION</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Get Your Ticket
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.25rem' }}>
                Pre-register for {eventData.name} ({eventData.dateBadge}). No payment required at pre-registration.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Alex Chen"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && (
                  <span style={{ fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle style={{ width: '12px', height: '12px' }} /> {errors.fullName}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="alex@example.com"
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
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && (
                  <span style={{ fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle style={{ width: '12px', height: '12px' }} /> {errors.phone}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">College / Organization</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Department of Computer Science"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
                {errors.organization && (
                  <span style={{ fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle style={{ width: '12px', height: '12px' }} /> {errors.organization}
                  </span>
                )}
              </div>

              <div style={{ marginTop: '1.75rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 style={{ width: '18px', height: '18px', animation: 'spin 1s linear infinite' }} />
                      <span>Processing Registration...</span>
                    </>
                  ) : (
                    <>
                      <Ticket style={{ width: '18px', height: '18px' }} />
                      <span>Confirm Pre-Registration</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success State */
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
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
              <CheckCircle2 style={{ width: '32px', height: '32px' }} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>
              Pre-Registration Recorded!
            </h3>

            <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.75rem', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#ffffff' }}>{formData.fullName}</strong>. We've captured your spot for <strong style={{ color: '#ffffff' }}>{eventData.name}</strong>.
            </p>

            <div
              style={{
                padding: '1rem',
                margin: '1.25rem 0',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '10px',
                textAlign: 'left',
                fontSize: '0.85rem',
                color: '#ffffff'
              }}
            >
              <div style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.25rem', fontWeight: 600 }}>Registration Summary:</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Organization:</strong> {formData.organization}</div>
              <div><strong>Status:</strong> Pre-Registered (Awaiting Official Dates Release)</div>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              Close
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
