'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ReportHeader } from '@/components/ReportHeader/page';
import Navegacao from '@/components/barra_navegacao/page';
import { categories, categoryIcons } from './reportes.constants';

const toSlug = (text: string) =>
  text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '-');

const ReportesPage = () => {
  const router = useRouter();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      router.push('/'); 
    }
  }, [router]);

  const handleCategoriaClick = (categoria: string) => {
    const slug = toSlug(categoria);
    router.push(`/reportes/${slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F82E2E]">
      <ReportHeader />

      <main className="flex-1 overflow-auto px-[2vh] py-[3vh] bg-[linear-gradient(360deg,_#000000_0%,_#242323_50%,_#323131_100%)] rounded-t-[25px] rounded-b-none max-w-4xl mx-auto w-full mb-10">
        <section className="mb-[3vh]">
          <h2 className="font-xxgeom text-[2.6vh] font-semibold text-white mb-[3vh]">
            Escolha o que deseja reportar
          </h2>
          <div className="grid grid-cols-3 gap-[2vh]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoriaClick(category)}
              >
                <div className="flex flex-col items-center w-full h-full gap-3 mb-2">
                  <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[25px] bg-neutral-600 p-3">
                    <img
                      src={categoryIcons[category]}
                      alt={category}
                      style={{ height: '8.7vh', width: '8.7vh' }}
                    />
                  </div>
                  <span className="text-white leading-[100%] font-xxgeom text-[1.9vh]">{category}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="border border-white rounded-2xl px-[2vh] py-[1vh] mb-[1.4vh]">
          <a href="/meus_reportes">
            <div className="flex justify-between items-center w-full text-white hover:text-gray-300 cursor-pointer transition-colors">
              <span className="text-[2.5vh] font-xxgeom ml-4">Meus Reportes</span>
              <img src="/back-white.png" alt="selecionar" className='rotate-180 w-[2vh] h-[2vh]' />
            </div>
          </a>
        </div>

        <Navegacao ativo="home" />
      </main>
    </div>
  );
};

export default ReportesPage;
