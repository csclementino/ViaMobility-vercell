'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SeletorDeEstacao from '@/components/SeletorEstacao/page';

export default function Rotas() {
  const router = useRouter();
  const [destino, setDestino] = useState('');

  const handleProximo = () => {
    if (destino) {
      router.push(`/rotas/origem?destino=${destino}`);
    }
  };

  return (
    <div className="relative h-screen ">
      <img
        src="/destino-image2.jpg"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        alt="fundo"
      />

      <div onClick={() => router.back()} className='fixed z-10 px-[2.4vh] flex flex-col pt-[7vh]'>
        <svg width="3.8vh" height="3.8vh" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 22L3 12.5L13 3" stroke="#0EADA8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="fixed rounded-t-[40px] rounded-b-none bottom-0 left-0 w-full bg-[#196D6A] shadow-md z-50 px-[3vh]">
        <h1 className="font-xxgeom leading-[100%] text-left mt-[3vh] text-[4vh]">
          Para onde<br />vamos hoje?
        </h1>

        <SeletorDeEstacao onSelecionar={setDestino} />

        {destino && (
          <div
            onClick={handleProximo}
            className='cursor-pointer bg-white flex absolute bottom-0 right-0 py-[3vh] px-[7.5vh] rounded-tl-[80px] items-center justify-center'
          >
            <svg width="2.4vh" height="3.7vh" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 27L16 15L3 3" stroke="#009C97" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
