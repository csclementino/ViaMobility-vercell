'use client';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navegacao from '@/components/barra_navegacao/page';
import BotaoVoltar from '@/components/BotaoVoltar/page';

interface TremData {
  track: string;
  station: string;
  direction: string;
  expectedArrivalTime: string;
}

export default function EstacaoPage() {
  const { estacao } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get('id');
  const conce = searchParams.get('conce');

  const [dados, setDados] = useState<TremData[]>([]);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState('');
  const [sentidoSelecionado, setSentidoSelecionado] = useState(0);

  const alternarSentido = () => {
    setSentidoSelecionado((prev) => (prev === 0 ? 1 : 0));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://viamobility-backend-dzb8a3hterh6d2ce.brazilsouth-01.azurewebsites.net/api/next-train/${conce}/${id}/${estacao}`);
        const json = await res.json();

        if (json?.Status && json?.Data) {
          setDados(json.Data);
          setUltimaAtualizacao(json.ultima_atualizacao || '');
        }
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    if (id && conce && estacao) fetchData();
  }, [id, conce, estacao]);


  const direcoesValidas = Array.from(
    new Set(
      dados
        .filter((d) => d.expectedArrivalTime)
        .map((d) => d.direction)
    )
  );

  const dadosFiltrados = dados.filter(
    (d) => d.direction === direcoesValidas[sentidoSelecionado] && d.expectedArrivalTime
  );

  const horariosSentido = dadosFiltrados.map((item) =>
    new Date(item.expectedArrivalTime).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#3089FB]">
      <header className="relative bg-[linear-gradient(180deg,_#00FFA3_0%,_#3089FB_98.21%)] text-white py-12 px-3 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/banner-proximotrem.png')] bg-no-repeat bg-[position:center_60%] bg-[length:70%] pointer-events-none" />
        <div className="h-[17vh] flex flex-col relative z-10">
          <div onClick={() => router.back()} >
            <BotaoVoltar />
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto py-8 bg-[#151515] rounded-t-[25px] rounded-b-none max-w-4xl mx-auto w-full ">
        <div className="px-5 flex items-center justify-between h-[11.2vh]">
          <p className="text-[2.5vh] font-xxgeom text-left w-[85%]">
            O próximo trem sentido{' '}
            {direcoesValidas[sentidoSelecionado] || ''} chega às:
          </p>
          {direcoesValidas.length > 1 && (
            <button onClick={alternarSentido} className="pl-2">
              <img
                src="/icone_alternar.png"
                alt="Alternar sentido"
                className="w-[6vh] h-[6vh]"
              />
            </button>
          )}
        </div>

        <div className="rounded-2xl flex flex-col items-center mt-5">
          <div className="flex items-center gap-4 px-4">
            {horariosSentido.map((t, i) => {
              const digitos = t.replace(':', '').split(''); 
              return (
                <div key={i} className="flex items-center ">
                  <div className="grid grid-cols-2 gap-2.5">
                    {digitos.slice(0, 2).map((digito, j) => (
                      <div
                        key={`first-${j}`}
                        className="flex items-center justify-center text-center h-[14.7vh] w-[8.5vh] bg-[#383838] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] rounded-[25px]"
                      >
                        <span className="text-[7.5vh] font-plex font-normal text-teal-400">{digito}</span>
                      </div>
                    ))}
                  </div>

                  <div className="px-2 flex flex-col justify-center items-center gap-7">
                    <div className="w-[1.5vh] h-[1.5vh] bg-[#383838] rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"></div>
                    <div className="w-[1.5vh] h-[1.5vh] bg-[#383838] rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {digitos.slice(2, 4).map((digito, j) => (
                      <div
                        key={`last-${j}`}
                        className="flex items-center justify-center h-[14.7vh] w-[8.5vh] bg-[#383838] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] rounded-[25px]"
                      >
                        <span className="text-[7.5vh] font-plex font-normal text-teal-400">{digito}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {horariosSentido.length === 0 && (
              <div className="text-center py-4 text-gray-400">
                Nenhum horário disponível
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-row items-center justify-center gap-2">
          <img src="/time-past.png" alt="icone passado" 
          className='w-[2.5vh] h-[2.5vh]'
          />
          <h1 className='text-[1.6vh] font-xxgeom'>
            ÚLTIMA ATUALIZAÇÃO: <span className='font-inter'>{' '+ ultimaAtualizacao}</span>
          </h1>
        </div>

        <div className="text-white mt-[6vh] mb-[6vh] flex items-center justify-center">
          <Link href={"/reportes"}>
          <div className='bg-[#434343] rounded-[20px] flex flex-row items-center justify-start h-[14vh] w-[37vh]'>
            <div
            className='w-[25%] flex items-center justify-center h-full bg-gradient-to-b from-[#F48E00] to-[#F82E2E] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[20px]'
            >
              <img src="/report.png" alt="reporte icon" 
              className='w-[7vh] h-[7vh]'
              />
            </div>
            <div className='w-[65%] flex flex-col gap-3 items-center justify-center text-left pl-3 '>
              <h1 className='leading-[100%] font-xxgeom text-[2.2vh]'>Viu algo suspeito ou<br></br>desconfortável?</h1>
              <p className='font-inter text-[1.5vh] leading-[100%]'>Use a guia <span className='font-bold'>Reporte</span> e nos ajude a garantir a segurança de todos</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <Navegacao ativo="home" />
    </div>
  );
}
