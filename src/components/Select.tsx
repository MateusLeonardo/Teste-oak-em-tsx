import React from "react";

type SelectProps = React.ComponentProps<"select"> & {
  options: string[];
  label: string;
};

const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <div>
      <label className="block text-lg" htmlFor={label}>
        Disponivel para venda?
      </label>
      <select name={label} id={label} {...props} className="rounded ">
        <option value="" disabled></option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
