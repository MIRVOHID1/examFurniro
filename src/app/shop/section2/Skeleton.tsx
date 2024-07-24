import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="relative w-[285px] h-[480px] bg-[#F4F5F7] shadow-md overflow-hidden">
      <div className="w-full h-[301px] bg-gray-300 animate-pulse"></div>
      <div className="p-5">
        <div className="h-6 bg-gray-300 animate-pulse mb-4"></div>
        <div className="h-4 bg-gray-300 animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-300 animate-pulse mb-2"></div>
      </div>
    </div>
  );
};

export default Skeleton;
