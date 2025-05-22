// app/proximo-trem/page.tsx

'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ProxTremHeader } from '@/components/ProxTremHeader/page';
import Navegacao from '@/components/barra_navegacao/page';
import linhasJson from '@/data/linhas_metro.json';
import { useRouter } from 'next/navigation';

export default function ProximoTremPage() {
  const router = useRouter();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      router.push('/'); 
    }
  }, [router]);

  const linhas = Object.entries(linhasJson).map(([slug, dados]) => ({
    slug,
    ...dados,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-[#3089FB]">
      <ProxTremHeader />

      <main className="flex-1 overflow-auto px-4 py-8 bg-[linear-gradient(360deg,_#000000_0%,_#242323_50%,_#323131_100%)] rounded-t-[25px] rounded-b-none max-w-4xl mx-auto w-full ">
        <h1 className="text-[3vh] font-xxgeom text-white mb-8">Em qual linha você está?</h1>

        <div className="space-y-6">
          {linhas.map((linha) => (
            <Link
              key={linha.slug}
              href={{
                pathname: `/proximo-trem/${linha.slug}`,
                query: {
                  id: linha.id,
                  conce: linha.conce,
                },
              }}
              className="flex items-center justify-between rounded-xl px-2"
            >
              <div
                className="w-[22%] h-[7vh] flex items-center rounded-l-xl justify-center text-white font-xxgeom text-[4vh]"
                style={{ backgroundColor: linha.cor }}
              >
                {linha.id}
              </div>
              <div className="flex flex-row items-center h-[7vh] w-full border-y border-r border-l-0 border-solid border-[rgba(255,255,255,1)] rounded-r-[10px] rounded-l-none">
                <div className="flex-1 px-4">
                  <h2 className="text-left text-[2.6vh] font-semibold text-white">
                    {linha.apelido}
                  </h2>
                </div>
                <img src="back-white.png" alt="voltar" className="mr-2 w-5 h-5 rotate-180" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Navegacao ativo="home" />
    </div>

  );
}
