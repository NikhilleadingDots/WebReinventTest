import React from "react";
interface CommonInputProps {
  label: string;
  inputId: string;
  placeholder: string;
  type: string;
  value: string | number | symbol | any;
  htmlFor: string;
  onChange: void | any;
  name: string;
  labelClassName: string;
}

const CommonInput: React.FC<CommonInputProps> = ({
  value,
  label,
  inputId,
  placeholder,
  type,
  htmlFor,
  onChange,
  name,
  labelClassName
}) => {
  return (
    <div className="mb-4">
      <label className={labelClassName} htmlFor={htmlFor}>{label}</label>
      <input
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        name={name}
        id={inputId}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
