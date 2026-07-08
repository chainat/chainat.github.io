const pills = [
  {
    label: 'Platform Builder',
    desc: '36 microservices, AWS, serverless, GraphQL federation',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 7h.01M11 7h6M7 11h.01M11 11h6" />
      </svg>
    ),
  },
  {
    label: 'AI Practitioner',
    desc: 'ML engines, LLM integration, MCP servers, agentic engineering',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a8 8 0 0 1 8 8c0 5-8 13-8 13S4 15 4 10a8 8 0 0 1 8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Team Builder',
    desc: 'Scaled 1→15, distributed teams, 95.5% retention',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Execution-Focused',
    desc: 'Business-aligned, pragmatic build-vs-buy, revenue-driven',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="section-label">About</div>
      <h2 className="section-title">
        Engineer at heart,
        <br />
        leader by growth.
      </h2>
      <div className="section-divider" />
      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m a software engineer turned CTO with 17+ years of hands-on
            experience building products and the teams behind them. I&apos;ve
            grown engineering organisations from the ground up, shipped
            AI-powered features, and stayed close to the code throughout.
          </p>
          <p>
            At Before You Buy, I joined as the first in-house engineer and
            scaled the team to 15 across Sydney and Cebu — growing report
            distribution by 700% and contributing to $13M in annual revenue.
          </p>
          <p>
            I care about clean architecture, pragmatic decisions, and engineers
            who are set up to do their best work. I&apos;m equally comfortable
            in a whiteboard architecture session, a sprint retro, or a pull
            request review.
          </p>
        </div>
        <div className="about-pills">
          {pills.map((pill) => (
            <div className="pill-item" key={pill.label}>
              <div className="pill-icon">{pill.icon}</div>
              <div className="pill-text">
                <strong>{pill.label}</strong>
                {pill.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
