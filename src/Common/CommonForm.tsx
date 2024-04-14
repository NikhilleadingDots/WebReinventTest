import React from "react";
import CommonInput from "./CommonInput";
import CommonButton from "./CommonButton";
interface CommonFormProps {
  title: string;
  description: string;
  onChange: void | any;
  onClick: void | any;
  loginData: any;
  buttonTitle: string;
}

const CommonForm: React.FC<CommonFormProps> = ({
  title,
  description,
  onChange,
  onClick,
  loginData,
  buttonTitle
}) => {
  return (
    <>
      <div className="mx-auto grid max-w-sm space-y-6 ">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <CommonInput
          name="email"
          label="Email"
          type="email"
          inputId="email"
          placeholder="m@example.com"
          onChange={onChange}
          htmlFor="Email"
          value={loginData?.email}
          labelClassName="flex items-center justify-between  text-gray-700 text-sm font-bold mb-2"
        />
        <CommonInput
          name="password"
          label="Password"
          type="password"
          inputId="password"
          placeholder="M12m#"
          onChange={onChange}
          htmlFor="Password"
          value={loginData?.password}
          labelClassName="flex items-center justify-between  text-gray-700 text-sm font-bold mb-2"
        />
        <CommonButton
          labelClassName="flex items-center justify-between"
          name={buttonTitle}
          onClick={onClick}
          inputId="register"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
};

export default CommonForm;
