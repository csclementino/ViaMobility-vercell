'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function ReportWaitPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/tela_principal');
    }, 8000);

    const interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 0.625 : 0));
    }, 50);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [router]);

  const config = {
    sucesso: {
      title: 'Reporte enviado!',
      icon: '/check.png',
      bottomIcon: '/heart.png',
      message:
        'Obrigado por contribuir para uma viagem mais segura! Seu reporte foi registrado com sucesso e será analisado.',
      gradient: 'from-[#07D089] to-[#2D79D7]',
    },
    erro: {
      title: 'Erro ao enviar reporte!',
      icon: '/error.png',
      bottomIcon: '/reparo.png',
      message:
        'Ocorreu um erro ao enviar seu reporte. Nossa equipe já está trabalhando para resolver o problema.',
      gradient: 'from-[#D00707] to-[#D79C2D]',
    },
    aguardando: {
      title: 'Aguarde para reportar!',
      icon: '/sinal-alerta.png',
      bottomIcon: '/info.png',
      message:
        'Você já enviou um reporte recentemente. Aguarde alguns minutos ou acesse Meus Reportes para editar a ocorrência anterior.',
      gradient: 'from-[#07D089] to-[#2D79D7]',
    },
  };

  const state = status === 'sucesso' || status === 'erro' ? config[status] : config.aguardando;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#242424] text-white">
      <div className="w-[19vh] h-[19vh] mb-2">
        <img
          src={state.icon}
          alt="Alerta"
          className="w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.4))' }}
        />
      </div>

      <h1 className="text-[4vh] font-xxgeom text-center mb-8 px-4 leading-[110%]">
        {state.title}
      </h1>

      <div className="fixed bottom-25 w-full">
        <div className="bg-[#323131] shadow-md rounded-[20px] w-full flex flex-row items-center justify-center px-4 py-4">
          <div className="w-[20%] flex items-center justify-center">
            <img src={state.bottomIcon} alt="Informação" className="w-[7vh] h-[7vh]" />
          </div>
          <div className="w-[80%] text-left ml-2 font-inter text-[1.9vh] leading-[120%]">
            <p>{state.message}</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center">
        <div className="w-full max-w-md h-[1.4vh] bg-[#1f1f1f] rounded-[21px] overflow-hidden">
          <div
            className={`bg-gradient-to-r ${state.gradient} h-full transition-all duration-75 ease-linear`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default function ReportWaitPage() {
  return (
    <Suspense fallback={<div className="text-white text-center mt-10">Carregando...</div>}>
      <ReportWaitPageContent />
    </Suspense>
  );
}
