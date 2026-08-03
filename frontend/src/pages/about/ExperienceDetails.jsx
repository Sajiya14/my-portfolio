
export default function ExperienceDetails({data}) {
  return (
    <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold mb-1">
        {data.role} @ {data.company}
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        {data.duration}
      </p>

      <ul className="space-y-3">
        {data.points.map((point, index) => (
          <li key={index} className="flex gap-2 text-gray-400">
            <span className="mt-1 text-sm">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}