const stats = [
  { num: '700%', label: 'Report distribution growth' },
  { num: '160K+', label: 'Annual reports delivered (2024)' },
  { num: '$13M', label: 'Revenue impact' },
  { num: '2.5M+', label: 'Daily API requests' },
  { num: '1→15', label: 'Engineers scaled' },
  { num: '95.5%', label: 'Team retention' },
  { num: '36', label: 'Microservices in production' },
  { num: '5h/day', label: 'Saved via AI automation' },
]

export default function Impact() {
  return (
    <div className="impact-wrap" id="impact">
      <div className="impact-inner">
        <div className="section-label">Impact</div>
        <h2 className="section-title">Numbers that matter.</h2>
        <div className="section-divider" />
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
