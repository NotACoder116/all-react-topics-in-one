import React from "react";

const ShimmerCard = () => {
  return Array(20)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="p-4 m-4 border border-black">
        <div className="w-64 h-64 bg-gray-200"></div>
      </div>
    ));
};

export default ShimmerCard;
