const CustomInput = ({ label, invalid, ...other }) => {
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClass = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClass += " text-red-400";
    inputClass += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClass += " text-stone-300";
    inputClass += " text-gray-700 bg-stone-300";
  }

  return (
    <>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...other} />
    </>
  );
};

export default CustomInput;

// ${invalid ? invalidClass : undefined}
