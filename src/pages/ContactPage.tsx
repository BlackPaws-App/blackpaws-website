import { useState, type FormEvent, type ChangeEvent } from 'react';
import imgEmail from '../imports/ContactPage/Contact_email.png';
import imgAddress from '../imports/ContactPage/Address.png';
import imgSocial from '../imports/ContactPage/Social.png';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_INFO, CONTACT_FORM_FIELDS, CONTACT_ENDPOINT } from '@/data/contact';

// ---------------------------------------------------------------------------
// Contact info block
// ---------------------------------------------------------------------------

function InfoRow({
  icon,
  alt,
  children,
}: {
  icon: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8 items-center">
      <img
        src={icon}
        alt={alt}
        width={100}
        height={100}
        loading="lazy"
        className="w-[100px] h-[100px] object-contain shrink-0"
      />
      {children}
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-12 shrink-0 w-full lg:w-[388px]">
      <InfoRow icon={imgEmail} alt="Icône email">
        <div className="flex flex-col gap-2">
          <p className="font-body font-bold text-[22px] text-brand">Contact email</p>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="font-body text-[16px] text-brand hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
      </InfoRow>

      <InfoRow icon={imgAddress} alt="Icône adresse">
        <div className="flex flex-col gap-2">
          <p className="font-body font-bold text-[22px] text-brand">Address</p>
          <a
            href="https://maps.google.com/?q=122+Rue+Amelot,+75011+Paris,+France"
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic font-body text-[16px] text-brand leading-normal hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {CONTACT_INFO.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </a>
        </div>
      </InfoRow>

      <InfoRow icon={imgSocial} alt="Icône réseaux sociaux">
        <div className="flex flex-col gap-2">
          <p className="font-body font-bold text-[22px] text-brand">Social</p>
          <a
            href={CONTACT_INFO.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-body text-[16px] text-brand hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {CONTACT_INFO.github.label}
            <span aria-hidden="true" className="text-[18px]">↗</span>
          </a>
        </div>
      </InfoRow>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Form field primitives
// ---------------------------------------------------------------------------

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="font-body text-[22px] text-brand">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="font-body text-[13px] text-red-500 mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  'w-full py-2 font-body text-[16px] text-brand bg-transparent border-0 border-b border-periwinkle outline-none placeholder:text-[#8fa1c4] focus:border-brand transition-colors duration-200';

// ---------------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------------

type FormState = { subject: string; email: string; message: string };
type FormErrors = Partial<FormState>;
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.subject.trim()) errors.subject = 'Subject is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Message is required.';
  return errors;
}

function ContactForm() {
  const [values, setValues] = useState<FormState>({ subject: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('sending');
    try {
      // TODO: replace CONTACT_ENDPOINT with real API destination
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
      setValues({ subject: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulaire de contact"
      className="flex flex-col gap-12 w-full lg:w-[460px]"
    >
      <Field id="subject" label={CONTACT_FORM_FIELDS.subject.label} error={errors.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          placeholder={CONTACT_FORM_FIELDS.subject.placeholder}
          aria-describedby={errors.subject ? 'subject-err' : undefined}
          className={inputBase}
        />
      </Field>

      <Field id="email" label={CONTACT_FORM_FIELDS.email.label} error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder={CONTACT_FORM_FIELDS.email.placeholder}
          aria-describedby={errors.email ? 'email-err' : undefined}
          className={inputBase}
        />
      </Field>

      <Field id="message" label={CONTACT_FORM_FIELDS.message.label} error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          placeholder={CONTACT_FORM_FIELDS.message.placeholder}
          aria-describedby={errors.message ? 'message-err' : undefined}
          className={`${inputBase} resize-none`}
        />
      </Field>

      {/* Status messages */}
      {status === 'success' && (
        <p role="status" className="font-body text-[16px] text-green-700 bg-green-50 rounded-2xl px-4 py-3">
          Message sent! We will get back to you shortly.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="font-body text-[16px] text-red-600 bg-red-50 rounded-2xl px-4 py-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-4 px-12 h-[54px] rounded-[48px] bg-periwinkle font-body text-[22px] text-brand whitespace-nowrap transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
          {status !== 'sending' && (
            <svg width="15" height="15" viewBox="0 0 15.0845 14.7279" fill="none" aria-hidden="true">
              <path
                d="M14.7916 8.07107C15.1821 7.68054 15.1821 7.04738 14.7916 6.65685L8.42762 0.292893C8.0371 -0.097631 7.40393 -0.097631 7.01341 0.292893C6.62288 0.683418 6.62288 1.31658 7.01341 1.70711L12.6703 7.36396L7.01341 13.0208C6.62288 13.4113 6.62288 14.0445 7.01341 14.435C7.40393 14.8256 8.0371 14.8256 8.42762 14.435L14.7916 8.07107ZM0 7.36396V8.36396H14.0845V7.36396V6.36396H0V7.36396Z"
                fill="#432B60"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ContactPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header transparent={false} />

      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto px-10 md:px-[170px] py-12 flex flex-col gap-12 mt-[150px]">
          {/* Page title */}
          <div className="flex flex-col gap-4">
            <h1 className="font-display font-bold text-[clamp(36px,6vw,52px)] text-brand leading-tight">
              Let's talk!
            </h1>
            <p className="font-body text-[clamp(18px,2.5vw,28px)] text-brand max-w-[540px]">
              Tell us about your project and how we can help you create the best product!
            </p>
          </div>

          {/* Content row */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
