const groups = [
  {
    category: 'Cloud & Infra',
    chips: [
      'AWS Lambda',
      'Docker',
      'Kubernetes',
      'RDS',
      'S3',
      'API Gateway',
      'Serverless Framework',
      'AWS, GP, Azure',
    ],
  },
  {
    category: 'Architecture',
    chips: [
      'Microservices',
      'GraphQL Federation',
      'REST APIs',
      'Event-driven',
      'Webhooks',
    ],
  },
  {
    category: 'AI / ML',
    chips: [
      'ML Prediction',
      'LLM Integration',
      'Conversational AI',
      'MCP Servers',
      'Agentic AI',
    ],
  },
  {
    category: 'Dev Practices',
    chips: [
      'CI/CD',
      'Claude Code',
      'Cursor',
      'Automated PR Review',
      'Automation Testing',
    ],
  },
];

export default function Tech() {
  return (
    <div className="tech-wrap">
      <div className="tech-inner">
        <div className="section-label">Tech &amp; Tools</div>
        <h2 className="section-title">What I work with.</h2>
        <div className="section-divider" />
        <div className="tech-grid">
          {groups.map((g) => (
            <div className="tech-group" key={g.category}>
              <h3>{g.category}</h3>
              <div className="tech-chips">
                {g.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
