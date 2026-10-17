const StatCard = ({ value, label, icon }) => (
  <div className="text-center">
    <div className="mb-1 text-4xl font-bold text-accent">
      <i className={`bi ${icon} mr-1`}></i>
      {value}
    </div>
    <div className="text-sm text-slate-500">{label}</div>
  </div>
)

export default StatCard
