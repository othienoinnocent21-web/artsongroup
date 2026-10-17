const ServiceCard = ({ icon, title, desc, features = [] }) => (
  <div className="service-card h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-navy text-accent">
      <i className={`bi ${icon} text-3xl`}></i>
    </div>
    <h3 className="mb-3 text-xl font-bold text-navy">{title}</h3>
    <p className="mb-3 text-slate-600">{desc}</p>
    {features.length > 0 && (
      <ul className="space-y-2 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f}>
            <i className="bi bi-check2-circle mr-2 text-accent"></i>
            {f}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default ServiceCard
