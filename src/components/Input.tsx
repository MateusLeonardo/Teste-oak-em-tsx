import React from "react";

type Input = React.ComponentProps<"input"> & {
  label: string;
};

const Input = ({ label, ...props }: Input) => {
  return (
    <div className="mb-4">
      <label className="block font-sans text-2xl" htmlFor={label}>
        {label}
      </label>
      <input
        className="border border-black rounded-lg"
        type="text"
        id={label}
        name={label}
        {...props}
      />
    </div>
  );
};

export default Input;
