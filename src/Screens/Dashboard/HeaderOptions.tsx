import React from "react";
interface HeaderProps {
  name: string;
}

const HeaderOptions: React.FC<HeaderProps> = ({name}) => {
  return (
  
    <div className="flex items-center gap-4">
      <span className="text-lg font-bold">{name}</span>
    </div>
    
  );
};

export default HeaderOptions;
