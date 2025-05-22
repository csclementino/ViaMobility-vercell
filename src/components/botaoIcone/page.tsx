import React from 'react';

interface BotaoIconeProps {
  children: React.ReactNode;
  icone: string;
  onClick?: () => void;
}

export const BotaoIcone = ({ children, icone, onClick }: BotaoIconeProps) => {
  return (
    <button 
      className=" flex flex-col items-center h-[19vh] w-[11vh] border-2 border-white rounded-[25px] cursor-pointer transition-colors duration-200 hover:bg-[#616161]"
      onClick={onClick}
    >
      <span className="flex flex-col gap-2 items-center h-full w-full justify-center">
        <img 
          src={icone} 
          alt="Ícone" 
          className="w-[7vh] h-[7vh] object-contain"
        />
        <span className="text-inherit text-[2vh] font-xxgeom leading-[100%]">{children}</span>
      </span>
      
      
    </button>
    
    
  );
};