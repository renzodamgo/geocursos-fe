import { HTMLInputTypeAttribute } from "react";

type InputType = {
  type: HTMLInputTypeAttribute;
  required?: boolean;
  placeholder: string;
};

export const Input = ({ type, required = true, placeholder }: InputType) => {
  return (
    <input
      required={required}
      type={type}
      placeholder={placeholder}
      className="form-control block w-full rounded-xl border-2 border-solid border-solid-gray border-opacity-20 bg-gray bg-clip-padding px-3 py-2 text-base tracking-tight text-black  transition ease-in-out placeholder:text-black focus:border-blue-600 focus:bg-white focus:text-black focus:outline-none "
    />
  );
};
