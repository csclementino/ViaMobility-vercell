'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { BotaoIcone } from '@/components/botaoIcone/page';

interface AcessoRapidoProps {
    titulo: string;
    botoes: Array<{
      texto: string;
      icone: React.ReactNode;
      caminho: string; 
    }>;
}

export const AcessoRapido = ({ titulo, botoes }: AcessoRapidoProps) => {
  const router = useRouter();

  return (
    <div className="text-left">
      <h2 className="mb-[3vh] text-[2.7vh] font-xxgeom ml-5">{titulo}</h2>
      <div className="justify-items-center grid grid-cols-3 justify-around px-[4vw] text-xs">
        {botoes.map((botao, index) => (
          <BotaoIcone
            key={index}
            icone={botao.icone}
            onClick={() => router.push(botao.caminho)}
          >
            {botao.texto}
          </BotaoIcone>
        ))}
      </div>
      <div className='w-full px-[5vw] mt-6 flex items-center justify-center'>
        <svg width="100%" height="10%" viewBox="0 0 342 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.80309e-07 0.9375C1.47526e-07 1.3125 1.14742e-07 1.6875 8.19589e-08 2.0625C5.7 2.1875 11.4 2.3 17.1 2.4C39.9 2.8 62.7 3.00001 85.5 3.00001C165.3 3.00001 245.1 2.7278 324.9 2.18336C330.6 2.14447 336.3 2.1042 342 2.06253C342 1.68753 342 1.31253 342 0.93753C336.3 0.895863 330.6 0.855584 324.9 0.816695C245.1 0.272244 165.3 1.4451e-05 85.5 7.47465e-06C62.7 5.48141e-06 39.9 0.200003 17.1 0.600001C11.4 0.700001 5.7 0.8125 1.80309e-07 0.9375Z" fill="white" fill-opacity="0.3"/>
          </svg>
      </div>
    </div>
  );
};
