export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">Contact</div>
      <h2 className="section-title">Let&apos;s talk.</h2>
      <div className="section-divider" />
      <div className="contact-card">
        <p>
          I&apos;m keen to apply my agentic engineering practices to — startups,
          scale-ups, or anything in between. If you&apos;re building something
          and need someone who can lead and ship, reach out.
        </p>
        <p>
          The role doesn't matter as much as the mission and the team. I&apos;m
          always happy to chat about
        </p>
        <a href="mailto:chainat@gmail.com" className="btn btn-primary">
          chainat@gmail.com
        </a>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/chainatwongtapan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
