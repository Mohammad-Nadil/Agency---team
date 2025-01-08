import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1452px] mx-auto px-3 relative ${className}`}>
      {children}
    </div>
  );
};

export default Container;
