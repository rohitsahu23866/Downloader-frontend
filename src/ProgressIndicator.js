import React from 'react';

const ProgressIndicator = ({ progress }) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 flex flex-col items-center z-50">
      <div className="relative">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-700"
            strokeWidth="4"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-green-500"
            strokeWidth="4"
            strokeDasharray={`${progress}, 100`}
            stroke="currentColor"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{ filter: 'drop-shadow(0 0 5px green)' }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          {progress}%
        </span>
      </div>
      <p className="text-white mt-2">Downloading...</p>
    </div>
  );
};

export default ProgressIndicator;
