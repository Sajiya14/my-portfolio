
export default function ExperienceDetails({data}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-1">
        {data.role} @ {data.company}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {data.duration}
      </p>

      <ul className="space-y-3">
        {data.points.map((point, index) => (
          <li key={index} className="flex gap-2 text-gray-700 dark:text-gray-300">
            <span className="mt-1 text-sm">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}