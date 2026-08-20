import { useState } from "react";
import { profile } from "../data/site.js";
import { useLanguage } from "../i18n/language.js";

const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

function ContactForm({ idPrefix = "contact" }) {
  const [status, setStatus] = useState("");
  const { copy } = useLanguage();

  function handleSubmit(event) {
    if (contactEndpoint) {
      setStatus(copy.contact.sending);
      return;
    }

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get("subject") || `${copy.contact.defaultSubject} ${formData.get("name")}`);
    const body = encodeURIComponent(`${formData.get("message")}\n\nFrom: ${formData.get("name")} <${formData.get("email")}>`);

    setStatus(copy.contact.opening);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className="c-contact-form"
      action={contactEndpoint || undefined}
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="c-contact-form__field">
        <label htmlFor={`${idPrefix}-name`}>{copy.contact.name}</label>
        <input id={`${idPrefix}-name`} name="name" autoComplete="name" required />
      </div>
      <div className="c-contact-form__field">
        <label htmlFor={`${idPrefix}-email`}>{copy.contact.email}</label>
        <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" required />
      </div>
      <div className="c-contact-form__field">
        <label htmlFor={`${idPrefix}-subject`}>{copy.contact.subject}</label>
        <input id={`${idPrefix}-subject`} name="subject" required />
      </div>
      <div className="c-contact-form__field c-contact-form__field--message">
        <label htmlFor={`${idPrefix}-message`}>{copy.contact.message}</label>
        <textarea id={`${idPrefix}-message`} name="message" rows="5" required />
      </div>
      <button className="c-contact-form__submit" type="submit">
        <span>{copy.contact.submit}</span>
      </button>
      <p className="c-contact-form__status" aria-live="polite">{status}</p>
    </form>
  );
}

export default ContactForm;
