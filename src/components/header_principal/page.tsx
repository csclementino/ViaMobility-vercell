import React from 'react';

const Header_Principal = () => {
  return (
  <header className="relative h-[32vh] overflow-hidden mt-[6vh] mb-[3vh] mx-[1.5vh] rounded-[4vh] shadow-[0vh_1vh_1vh_#1a1a1a]">
    <div className="absolute top-0 left-0 w-full h-full">
      <img 
        src="card-home.jpg" 
        className="w-full h-full object-cover object-center" 
        alt="Banner principal" 
      />
    </div>
      
      <div className="absolute z-10 flex flex-col items-start text-left gap-[1vh] h-full w-full justify-end ">
        <div>
          <h1 className="text-[30px] font-xxgeom text-white ml-4">Olá, Carlos!</h1>
        </div>
        <div>
          <p className="font-inter text-lg text-white mb-8 ml-4 leading-[22px]">
            Pronto para uma viagem<br></br>tranquila com a gente?
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header_Principal;