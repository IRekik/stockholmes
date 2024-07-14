import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-green-800"></div>
    </div>
  );
};

export default Loading;