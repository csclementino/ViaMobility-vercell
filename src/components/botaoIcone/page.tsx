import React from 'react';

interface BotaoIconeProps {
  children: React.ReactNode;
  icone: React.ReactNode;
  onClick?: () => void;
}

export const BotaoIcone = ({ children, icone, onClick }: BotaoIconeProps) => {
  return (
    <button 
      className=" flex flex-col items-center h-[14vh] w-[92%] bg-[#474747] rounded-[15px] cursor-pointer transition-colors duration-200 hover:bg-[#616161] px-[1vh]"
      onClick={onClick}
    >
      <span className="flex flex-col gap-2 items-start h-full w-full justify-center">
        <span className="w-[7vh] h-[7vh] flex items-center justify-start">
          {icone} 
        </span>
        <span className="text-inherit text-[2vh] font-xxgeom leading-[100%] text-left">
          {children}
        </span>
      </span>
      
    </button>
    
    
  );
};
