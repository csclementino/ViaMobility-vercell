import { Suspense } from 'react';
import RotaFinalClient from './RotaFinalClient';


function LoadingFallback() {
  return (
    <div className="h-screen flex flex-col bg-[#151515] text-white">
      <div className="fixed top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center text-center">
        <img src="/loading.gif" alt="Carregando" className="w-[25vh] h-[25vh] mb-4" />
        <h2 className="text-[4vh] leading-[110%] font-xxgeom">Descobrindo o<br />melhor trajeto...</h2>
      </div>
    </div>
  );
}

export default function RotaFinalPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RotaFinalClient />
    </Suspense>
  );
}
