'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SeletorDeEstacao from '@/components/SeletorEstacao/page';

export default function Origem() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const destino = searchParams.get('destino');
  const [origem, setOrigem] = useState('');

  const handleConfirmar = () => {
    if (origem && destino) {
      router.push(`/rota-final?origem=${origem}&destino=${destino}`);
    }
  };

  return (
    <div className="relative h-screen ">
      <img
        src="/origem-image2.webp"
        className="fixed top-0 left-0 w-full h-full object-cover z-0 "
        alt="fundo"
      />

      <div onClick={() => router.back()} className='fixed z-10 px-[2.4vh] flex flex-col pt-[7vh]'>
        <svg width="3.8vh" height="3.8vh" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 22L3 12.5L13 3" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="fixed rounded-t-[40px] rounded-b-none bottom-0 left-0 w-full bg-[#363636] shadow-md z-50 px-[3vh]">
        <h1 className="font-xxgeom leading-[100%] text-left mt-[3vh] text-[4vh]">
          Qual o ponto<br></br>de partida?
        </h1>

        <SeletorDeEstacao onSelecionar={setOrigem} siglaBloqueada= {destino ?? undefined} />

        {origem && (
          <div
            onClick={handleConfirmar}
            className='cursor-pointer bg-[#009C97] flex absolute bottom-0 right-0 py-[3vh] px-[7.5vh] rounded-tl-[80px] items-center justify-center'
          >
            <svg width="2.4vh" height="3.7vh" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 27L16 15L3 3" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

}
