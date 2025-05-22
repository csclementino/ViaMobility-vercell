import React from 'react';

interface StationItemProps {
  lineNumber: string;
  lineColor: string;
  stationName: string;
  time: string;
  onShowRoute: () => void;
}

const StationItem = ({ 
  lineNumber,
  lineColor,
  stationName,
  time,
  onShowRoute
}: StationItemProps) => {
  return (
    <div className="flex items-stretch m-[10px] bg-[rgb(219,219,219)] rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
      <div 
        className="w-1.5 rounded-l-lg" 
        style={{ backgroundColor: lineColor }}
      ></div>

      <div className="flex-1 p-4 flex items-center gap-4">
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: lineColor }}
        >
          {lineNumber}
        </div>

        <div className="flex-grow">
          <h3 className="text-base text-gray-700">{stationName}</h3>
          <span className="text-sm text-gray-600 block mt-1">{time}</span>
        </div>

        <button 
          onClick={onShowRoute} 
          className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-full font-semibold cursor-pointer transition-colors hover:bg-blue-600 hover:text-white flex-shrink-0"
        >
          Mostrar Trajeto
        </button>
      </div>
    </div>
  );
};

export default StationItem;