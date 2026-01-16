

function ButtonAll({ text, icon, type, size, customHover, extraClass }) {

  const bgGareen = "bg-lime-600 text-white";
  const bgBlue = "bg-blue-900 text-white";
  const borderGareen = "border-2 border-lime-600 text-lime-600 hover:text-white hover:border-transparent";
  const borderBlue = "border-2 border-blue-900 text-blue-900 hover:text-white hover:border hover:border-transparent";
  const borderwhite = "border-2 border-white text-white hover:text-white hover:border-transparent";

  const hoverGareen = "bg-lime-600";
  const hoverBlue = "bg-blue-900";
  const hoverWhite = "bg-white";
  const hoverTextBlue = 'group-hover:text-blue-900'
  
  let mainClass = "";
  let hoverBgClass = "";
  let hoverText = '';

  
  if (type === "greenblue") {
    mainClass = bgGareen;
    hoverBgClass = hoverBlue;
  } else if (type === "bluegreen") {
    mainClass = bgBlue;
    hoverBgClass = hoverGareen;
  } else if (type === "border-green") {
    mainClass = borderGareen;
    hoverBgClass = hoverGareen;
  } else if (type === "border-blue") {
    mainClass = borderBlue;
    hoverBgClass = hoverBlue;
  } else if (type === "border-whitegreen") {
    mainClass = borderwhite;
    hoverBgClass = hoverGareen;
  } else if (type === "border-whiteblue") {
    mainClass = borderwhite;
    hoverBgClass = hoverBlue;
  } else if (type === "bluewhite") {
    mainClass = bgBlue;
    hoverBgClass = hoverWhite;
    hoverText = hoverTextBlue
  } else {
    mainClass = type || "";
    hoverBgClass = customHover || "";
  }

  return (
    <button
      className={`relative flex items-center gap-2 ${extraClass} ${size ? size : "py-3 px-4"} rounded-xl font-semibold overflow-hidden group ${mainClass}`}
    >
      {/* Hover Background + Border Slide */}
      <span
        className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out ${hoverBgClass}`}
      ></span>

      {/* Button */}
      <span className={`relative z-10 ${hoverText} group-hover:text-white transition-colors duration-300 flex items-center gap-2`}>
        {text} {icon}
      </span>
    </button>
  );
}

export default ButtonAll;
