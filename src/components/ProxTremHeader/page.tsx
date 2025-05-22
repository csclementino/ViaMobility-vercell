'use client';
import React from 'react';
import BotaoVoltar from '@/components/BotaoVoltar/page';
import Link from 'next/link';


export const ProxTremHeader = () => {
  return (
    <header className="relative bg-[linear-gradient(180deg,_#00FFA3_0%,_#3089FB_98.21%)] text-white py-12 px-3 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/proxtrem.png')] bg-no-repeat bg-[position:right_0px_top_3vh] bg-contain pointer-events-none" />
      <div className="relative z-10">
        <Link href="/tela_principal">
          <BotaoVoltar />
        </Link>
        <div className=" flex flex-row items-center justify-around max-w-4xl mx-auto text-left ml-1.5 mt-2">
          <div>
            <h1 className="font-xxgeom text-[3.6vh] font-bold mb-3">Próximo trem</h1>
            <p className="mr-[16.5vh] font-inter leading-[110%] text-[1.9vh]">
              Saiba quanto tempo falta para o próximo trem chegar 
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};