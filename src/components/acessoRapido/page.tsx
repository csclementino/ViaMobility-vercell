'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { BotaoIcone } from '@/components/botaoIcone/page';

interface AcessoRapidoProps {
    titulo: string;
    botoes: Array<{
      texto: string;
      icone: string;
      caminho: string; 
    }>;
}

export const AcessoRapido = ({ titulo, botoes }: AcessoRapidoProps) => {
  const router = useRouter();

  return (
    <div className="text-left">
      <h2 className="mb-[3vh] text-[3.2vh] font-xxgeom ml-5">{titulo}</h2>
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
    </div>
  );
};