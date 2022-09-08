import React from "react";

const Skeleton = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-[#333335] rounded-md ${className}`}
    ></div>
  );
};

export default Skeleton;
