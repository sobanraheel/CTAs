import React from "react";
type Props = {
  children: React.ReactNode;
};

const FillWhiteButton = ({ children }: Props) => {
  return (
    <button className="px-4.5 py-2 text-[#ef41de] text-base transition-all duration-200 rounded-full cursor-pointer bg-white shadow-none border-2 border-white group">
      {children}{" "}
      <span className="pl-2 pr-1 group-hover:pl-3 group-hover:pr-0 transition-all duration-150">
        ⇢
      </span>
    </button>
  );
};

export default FillWhiteButton;
