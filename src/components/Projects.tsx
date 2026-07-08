interface Project {
  title: string;
  period: string;
  sub: string;
  items: (string | { label: string; desc: string })[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Before You Buy',
    period: '2020 – Present',
    sub: "Australia's leading digital property due diligence platform",
    items: [
      'Joined as first in-house engineer, promoted to CTO within 14 months',
      'Architected 36-microservice platform on AWS with GraphQL federation',
      'Built REST API integration with Domain & REA handling 2.5M+ daily requests',
      'Delivered in-house ML prediction algorithm (R&D grant backed)',
      'Deployed outbound AI phone assistant saving 5 staff-hours/day',
      'Lead/built MCP server powering AI chat systems',
      'Led PoC on LLM-based data extraction for Valocity/PropTrack and Data as a Service offering',
      'Championed Claude Code, Cursor, and automated PR review across the team',
      'Lead/integrated CoreLogic API system for listing info & enhancing business operations with data-driven insights',
    ],
    tags: [
      'AWS',
      'Microservices',
      'GraphQL',
      'ML / AI',
      'LLM',
      'MCP',
      'REST API',
      'Serverless',
    ],
  },
  {
    title: 'CuriousThing',
    period: '2019 – 2020',
    sub: 'AI voice assistant startup — large-scale recruitment automation',
    items: [
      'Built and launched a SaaS platform for AI-powered phone interviews across multiple international markets',
      'Led a team of seven engineers through full technical delivery',
      'Early hands-on work with conversational AI and voice automation at scale (pre-ChatGPT)',
    ],
    tags: ['Conversational AI', 'SaaS', 'Voice', 'Team Lead'],
  },
  {
    title: 'Earlier Career',
    period: '2007 – 2019',
    sub: 'Senior engineering roles across AI, insurance, solar, and digital agencies',
    items: [
      {
        label: 'Flamingo Ventures',
        desc: '— Senior engineer on an AI-powered insurance chat platform, deployed across all three major cloud providers',
      },
      {
        label: 'Sungevity',
        desc: '— Senior developer on a solar design SaaS product (remote, Oakland)',
      },
      {
        label: 'VML Australia',
        desc: '— Large-scale digital delivery for major clients',
      },
      {
        label: 'Academic',
        desc: '— MSc Computer Science; published research in handwritten Thai OCR at ICADL 2002',
      },
    ],
    tags: ['Cloud', 'SaaS', 'Full-stack', 'Research'],
  },
];

export default function Projects() {
  return (
    <div className="projects-wrap">
      <div className="projects-inner" id="projects">
        <div className="section-label">Projects</div>
        <h2 className="section-title">What I&apos;ve built.</h2>
        <div className="section-divider" />
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-header">
              <h3>{p.title}</h3>
              <span className="project-period">{p.period}</span>
            </div>
            <p className="project-sub">{p.sub}</p>
            <ul className="project-items">
              {p.items.map((item, i) =>
                typeof item === 'string' ? (
                  <li key={i}>{item}</li>
                ) : (
                  <li key={i}>
                    <strong style={{ color: 'var(--text)' }}>
                      {item.label}
                    </strong>
                    {item.desc}
                  </li>
                ),
              )}
            </ul>
            <div className="project-tags">
              {p.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
