import React from "react";
interface CommonButtonProps {
  inputId: string;
  onClick: void | any;
  name: string;
  className: string;
  labelClassName: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  inputId,
  onClick,
  name,
  className,
  labelClassName
}) => {
  return (
    <div className={labelClassName}>
      <button
        className={className}
        name={name}
        id={inputId}
        onClick={onClick}
      >{name}</button>
    </div>
  );
};

export default CommonButton;
