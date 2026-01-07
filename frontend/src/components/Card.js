export default function Card({ title, description }) {
  return (
    <div
      className="
        group
        bg-white
        border border-slate-200
        rounded-xl
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Icon */}
      <div
        className="
          w-12 h-12
          rounded-lg
          bg-slate-100
          flex items-center justify-center
          mb-5
          group-hover:bg-slate-900
          transition
        "
      >
        {/* Icon Placeholder */}
        <span
          className="
            text-slate-500
            text-lg
            group-hover:text-white
            transition
          "
        >
          🛡️
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-slate-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
