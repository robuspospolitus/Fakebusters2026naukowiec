import logo from "../assets/logo/logo.png";
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
      
        <img src={logo} alt="" height={100} width={100}/>

      <div>
        <h1 className={`${text} font-bold text-gray-900 leading-tight`}>
          NaukOWIEC
        </h1>
      </div>
    </div>
  );
}
