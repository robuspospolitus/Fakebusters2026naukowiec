export function Logo({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizes = {
    small: { container: 40, text: "text-lg" },
    medium: { container: 50, text: "text-xl" },
    large: { container: 60, text: "text-2xl" }
  };

  const { container, text } = sizes[size];

  return (
    <div className="flex items-center gap-3">
      {/* Modern N icon */}
      <div
        className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center"
        style={{ width: container, height: container }}
      >
        <span className="text-white font-bold" style={{ fontSize: container * 0.5 }}>
          N
        </span>
      </div>

      <div>
        <h1 className={`${text} font-bold text-gray-900 leading-tight`}>
          NaukOWIEC
        </h1>
      </div>
    </div>
  );
}
