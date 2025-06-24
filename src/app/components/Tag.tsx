import React, { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  selected?: boolean;
}

const Tag: React.FC<TagProps> = ({ children, selected = false }) => {
  return (
    <div
      className={`font-medium py-2 px-4 rounded-full transition-colors text-sm
      ${selected ? "bg-indigo-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-indigo-500 hover:text-white"}`}
    >
      {children}
    </div>
  );
};

export default Tag;
