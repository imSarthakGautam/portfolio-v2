const contacts = [
  {
    label: 'Email',
    value: 'your_email@example.com',
    href: 'mailto:your_email@example.com',
    description: 'For inquiries and conversations.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your_name',
    href: 'https://www.linkedin.com/in/your_name',
    description: 'Connect with me professionally.',
  },
  {
    label: 'Instagram',
    value: '@your_name',
    href: 'https://www.instagram.com/your_name',
    description: 'A little more about me outside work.',
  },
];

function Contact() {
  return (
    <section className="contact-page">
      <header className="contact-header">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Contact</h1>
        <p>
          Have a question, an opportunity, or simply want to talk about
          technology? Feel free to reach out.
        </p>
      </header>

      <div className="contact-list">
        {contacts.map((contact) => (
          <div className="contact-entry" key={contact.label}>
            <div>
              <h2>{contact.label}</h2>
              <p>{contact.description}</p>
            </div>

            <a
              href={contact.href}
              target={contact.label === 'Email' ? undefined : '_blank'}
              rel={contact.label === 'Email' ? undefined : 'noopener noreferrer'}
            >
              {contact.value} ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;