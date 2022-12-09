import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <div className="transition-all duration-1000 min-h-screen bg-[#fff] dark:bg-[#354358]">
        {children}
      </div>
    </>
  );
};

export default Background;
