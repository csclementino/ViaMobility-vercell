"use client";

import React from 'react';
import Link from 'next/link';

interface NavegacaoProps {
  ativo: 'home' | 'mapa' | 'perfil';
}

const Navegacao: React.FC<NavegacaoProps> = ({ ativo }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#242424] shadow-lg py-2 flex justify-around items-center h-[7.5vh] rounded-t-[20px]">
      <Link href="/tela_principal"
        className={`flex flex-col items-center justify-center p-2 gap-1 flex-1 max-w-20 transition-all ${
          ativo === 'home' ? 'bg-[rgba(0,208,255,0.15)] rounded-[18px] text-white' : 'text-slate-400 '
        }`}
      >
        <img src="/home.png" className="w-[3vh] h-[3vh] object-contain" alt="Home" />
      </Link>

      <Link href="/pagina_mapa"
        className={`flex flex-col items-center justify-center p-2 gap-1 flex-1 max-w-20 transition-all ${
          ativo === 'mapa' ? 'bg-[rgba(0,208,255,0.15)] rounded-[18px] text-white' : 'text-slate-400'
        }`}
      >
        <img src="/map.png" className="w-[3vh] h-[3vh] object-contain" alt="Mapa" />
      </Link>

      <Link href="/pagina_perfil"
        className={`flex flex-col items-center justify-center p-2 gap-1 flex-1 max-w-20 transition-all ${
          ativo === 'perfil' ? 'bg-[rgba(0,208,255,0.15)] rounded-[18px] text-white' : 'text-slate-400 hover:text-blue-500'
        }`}
      >
        <img src="/user.png" className="w-[3vh] h-[3vh] object-contain" alt="Perfil" />
      </Link>
    </nav>
  );
};

export default Navegacao;
