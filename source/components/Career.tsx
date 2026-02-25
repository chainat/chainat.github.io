const timeline = [
  {
    role: 'Chief Technology Officer',
    company: 'Before You Buy — Sydney',
    period: 'Jul 2021 – Present',
    desc: 'Leading engineering strategy, AI roadmap, and a team of 15 across distributed squads. Still hands-on with architecture and code. Agentic engineering is my current obsession — building systems that build systems, and supercharging developers with AI automation.',
  },
  {
    role: 'Technical Lead',
    company: 'Before You Buy — Sydney',
    period: 'Apr 2020 – Jun 2021',
    desc: 'First in-house engineer. Expanded team to 13 in 14 months. Introduced microservice architecture and ML prediction engine.',
  },
  {
    role: 'Lead Software Engineer',
    company: 'CuriousThing — Sydney',
    period: 'Jan 2019 – Apr 2020',
    desc: 'Led team of seven. Built AI voice interview SaaS across international markets.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Flamingo Ventures — Sydney',
    period: 'Feb 2017 – Nov 2018',
    desc: 'AI-powered chat platform for insurance. Microservice architecture across three cloud providers.',
  },
  {
    role: 'Senior Software Developer',
    company: 'Sungevity — Oakland (Remote)',
    period: 'Earlier',
    desc: undefined,
  },
  {
    role: 'Senior Web Developer',
    company: 'VML Australia — Sydney',
    period: 'Earlier',
    desc: undefined,
  },
  {
    role: 'IT Lecturer',
    company: 'Payap University — Thailand',
    period: 'Earlier',
    desc: undefined,
  },
];

export default function Career() {
  return (
    <section id="career">
      <div className="section-label">Career</div>
      <h2 className="section-title">Where I&apos;ve been.</h2>
      <div className="section-divider" />
      <div className="timeline">
        {timeline.map((item) => (
          <div className="tl-item" key={`${item.role}-${item.company}`}>
            <div className="tl-dot" />
            <div className="tl-role">{item.role}</div>
            <div className="tl-company">{item.company}</div>
            <div className="tl-period">{item.period}</div>
            {item.desc && <div className="tl-desc">{item.desc}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
