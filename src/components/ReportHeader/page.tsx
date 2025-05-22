'use client';
import React from 'react';
import BotaoVoltar from '@/components/BotaoVoltar/page';
import { useRouter } from 'next/navigation';

export const ReportHeader = () => {
  const router = useRouter();
  return (
    <header className="relative bg-gradient-to-b from-[#F48E00] to-[#F82E2E] to-[98.21%] text-white py-[5vh] px-3 overflow-hidden">
    <div className="absolute inset-0 bg-[url('/megafone.png')] bg-no-repeat bg-[length:16.5vh] bg-[position:right_1rem_top_10vh] pointer-events-none" />
      <div onClick={() => router.back()}>
        <BotaoVoltar />
      </div>
      <div className='relative z-10'>
        <div className="flex flex-colum items-center justify-start max-w-4xl mx-auto text-left ml-2  mt-[2vh]">
          <div className='w-[55%] flex flex-col items-start'>
            <h1 className="text-[3.8vh] font-xxgeom mb-3">Reportes</h1>
            <p className="font-inter text-[1.9vh] ">
              Use esta área para comunicar situações de emergência ou segurança no metrô
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};