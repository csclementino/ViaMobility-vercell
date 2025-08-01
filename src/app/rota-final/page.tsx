'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type EstacaoInfo = {
  estacao: string;
  linha: string;
  sentido?: string;
  detail?: string;
  nome: string;
};

export default function RotaFinal() {
  const searchParams = useSearchParams();
  const origem = searchParams.get('origem');
  const destino = searchParams.get('destino');
  const router = useRouter();
  const [dadosRota, setDadosRota] = useState<EstacaoInfo[][] | null>(null);
  const [carregando, setCarregando] = useState(true);
  const coresDasLinhas: Record<string, string> = {
  'Azul': '#00549F',      // Linha 1
  'Verde': '#00A88F',     // Linha 2
  'Vermelha': '#EF4135',  // Linha 3
  'Amarela': '#FFD400',   // Linha 4
  'Lilás': '#9B3C94',     // Linha 5
  'Prata': '#8A898D',     // Linha 15
  'Rubi': '#CA016B',      // Linha 7
  'Diamante': '#97A098',  // Linha 8
  'Esmeralda': '#00A550', // Linha 9
  'Turquesa': '#00838C',  // Linha 10
  'Coral': '#F04E22',     // Linha 11
  'Safira': '#035399',    // Linha 12
  'Jade': '#00B359'       // Linha 13
};

  useEffect(() => {
  if (!origem || !destino) return;

  setCarregando(true);
  setDadosRota(null); 

  const fetchData = async () => {
    try {
      const [apiResponse] = await Promise.all([
        fetch(`http://192.168.15.93:8000/api/rotas/origem/${origem}/destino/${destino}`),
        new Promise(resolve => setTimeout(resolve, 2000)), 
      ]);

      if (!apiResponse.ok) throw new Error('Erro ao buscar dados da API');

      const data: EstacaoInfo[][] = await apiResponse.json();

      if (!data || data.length === 0) {
        throw new Error('Nenhum trajeto encontrado para a rota informada.');
      }

      setDadosRota(data);
    } catch (error) {
      console.error('Erro ao buscar rota:', error);
      setDadosRota(null);
    } finally {
      setCarregando(false);
    }
  };

  fetchData();
  }, [origem, destino]);

  return (
    <div className="h-screen flex flex-col bg-[#151515] text-white">
      {carregando ? (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center text-center">
          <img src="/loading.gif" alt="Carregando" className="w-[25vh] h-[25vh] mb-4" />
          <h2 className="text-[4vh] leading-[110%] font-xxgeom">Descobrindo o<br />melhor trajeto...</h2>
        </div>
      ) : dadosRota ? (
        <div className="flex flex-col h-screen overflow-y-auto">
          <div className='bg-[linear-gradient(270deg,#3089FB_40.38%,#00FFA3_100%)]
            rounded-br-[71px] text-white rounded-xl py-[3vh] px-[2vh] shadow-lg w-full flex flex-row items-center justify-start mb-6'>
            <div onClick={() => router.back()} className='cursor-pointer'>
              <svg width="3.8vh" height="3.8vh" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 22L3 12.5L13 3" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className='flex flex-row w-[100%] items-center justify-center'>
              <div className='flex flex-row items-center justify-center gap-6'>
                <div className='w-[15vh] h-[15vh] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                -rotate-[10.65deg]'>
                  <img src="/city-map.png" alt="imagem de mapa" />
                </div>
                <h1 className='text-left font-inter text-[3.8vh] leading-[100%]'>
                  Caminho<br/>traçado<br/><span className='font-bold'>Bora lá!</span>
                </h1>
              </div>
            </div>
          </div>

          <div className='mx-4 flex flex-row'>
            <div className=' w-[20%] flex items-center justify-center'>
              <svg width="6vh" height="6vh" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9999 3.66675C13.9333 3.66675 7.33325 10.2667 7.33325 18.3334C7.33325 28.2334 20.1666 39.4167 20.7166 39.9668C21.4499 40.5168 22.3666 40.5168 23.0999 39.9668C23.8333 39.4167 36.6666 28.2334 36.6666 18.3334C36.6666 10.2667 30.0666 3.66675 21.9999 3.66675ZM21.9999 25.6667C17.9666 25.6667 14.6666 22.3667 14.6666 18.3334C14.6666 14.3001 17.9666 11.0001 21.9999 11.0001C26.0333 11.0001 29.3333 14.3001 29.3333 18.3334C29.3333 22.3667 26.0333 25.6667 21.9999 25.6667Z" fill={coresDasLinhas[dadosRota[0][0].linha]}/>
              </svg>
            </div>
            <div className='w-[80%] flex flex-col text-start'>
              <h1 className='font-inter italic leading-[160%] text-[2vh]'>Origem <br></br><span className='font-xxgeom font-bold text-[3vh] not-italic'>{dadosRota[0][0].nome}</span></h1>
            </div>
          </div>

          {/* Render das linhas do trajeto */}
          <div className="mx-4 my-5">
            {dadosRota.map((linha, index) => {
              const inicio = linha[0];
              const fim = linha[1];
              const cor = coresDasLinhas[inicio.linha] || '#ccc';

              return (
                <div key={index} className="">
                  <div className='flex flex-row'>
                    <div className='w-[20%] flex items-center justify-center'>
                    
                    <svg width="3.75vh" height="30vh" viewBox="0 0 30 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_624_33)">
                      <path d="M30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15V225C0 233.284 6.71573 240 15 240C23.2843 240 30 233.284 30 225V15Z" fill={cor}/>
                      <mask id="mask0_624_33" maskUnits="userSpaceOnUse" x="8" y="99" width="15" height="41">
                      <path d="M23 140H8V99H23V140Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_624_33)">
                      <path d="M20.8433 130.577C20.3541 130.577 19.8848 130.77 19.5379 131.115L15.5001 135.16L11.4623 131.119C11.1145 130.783 10.6488 130.597 10.1654 130.601C9.68195 130.605 9.21951 130.799 8.87767 131.141C8.53582 131.483 8.34192 131.945 8.33772 132.429C8.33352 132.912 8.51935 133.378 8.85521 133.726L14.1984 139.069C14.5505 139.402 15.017 139.588 15.5019 139.588C15.9869 139.588 16.4534 139.402 16.8055 139.069L22.1486 133.726C22.4072 133.468 22.5833 133.139 22.6547 132.781C22.7261 132.423 22.6896 132.052 22.5498 131.714C22.41 131.377 22.1731 131.089 21.8693 130.886C21.5655 130.684 21.2084 130.576 20.8433 130.577Z" fill="white"/>
                      <path d="M15.5 113.983C15.011 113.983 14.542 114.177 14.1963 114.523C13.8505 114.869 13.6562 115.338 13.6562 115.827V136.108C13.6562 136.597 13.8505 137.066 14.1963 137.412C14.542 137.757 15.011 137.952 15.5 137.952C15.989 137.952 16.4581 137.757 16.8038 137.412C17.1496 137.066 17.3438 136.597 17.3438 136.108V115.827C17.3438 115.338 17.1496 114.869 16.8038 114.523C16.4581 114.177 15.989 113.983 15.5 113.983ZM15.5 106.612C15.011 106.612 14.542 106.806 14.1963 107.152C13.8505 107.497 13.6562 107.966 13.6562 108.455C13.6562 108.944 13.8505 109.413 14.1963 109.759C14.542 110.105 15.011 110.299 15.5 110.299C15.989 110.299 16.4581 110.105 16.8038 109.759C17.1496 109.413 17.3438 108.944 17.3438 108.455C17.3438 107.966 17.1496 107.497 16.8038 107.152C16.4581 106.806 15.989 106.612 15.5 106.612ZM15.5 99.2366C15.011 99.2366 14.542 99.4308 14.1963 99.7766C13.8505 100.122 13.6562 100.591 13.6562 101.08C13.6562 101.569 13.8505 102.038 14.1963 102.384C14.542 102.73 15.011 102.924 15.5 102.924C15.989 102.924 16.4581 102.73 16.8038 102.384C17.1496 102.038 17.3438 101.569 17.3438 101.08C17.3438 100.591 17.1496 100.122 16.8038 99.7766C16.4581 99.4308 15.989 99.2366 15.5 99.2366Z" fill="white"/>
                      </g>
                      <path d="M15 25C19.9706 25 24 20.9706 24 16C24 11.0294 19.9706 7 15 7C10.0294 7 6 11.0294 6 16C6 20.9706 10.0294 25 15 25Z" fill="white"/>
                      <path d="M15 230C19.9706 230 24 225.971 24 221C24 216.029 19.9706 212 15 212C10.0294 212 6 216.029 6 221C6 225.971 10.0294 230 15 230Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_624_33">
                      <rect width="30" height="240" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                    </div>
                    <div className='w-[80%] flex flex-col text-start py-1 justify-between text-[2.4vh] font-inter'>
                      <h1>{inicio.nome}</h1>
                      <div className='flex gap-2 flex-col'>
                        <h2 className='font-inter font-bold'><span className="px-2 py-0.5 text-[2.5vh] rounded-[7px]" style={{ background: coresDasLinhas[inicio.linha] }}>{inicio.linha}</span></h2>
                        <h1 className='font-xxgeom text-[2.8vh] font-bold leading-[120%]'
                        style={{ color: coresDasLinhas[inicio.linha] }}
                        >Sentido<br></br>{inicio.sentido ?? 'Desconhecido'}</h1>
                      </div>
                      <h2>{fim.nome}</h2>
                    </div>
                  </div>

                  {/* Caso exista "detail" */}
                  {fim.detail && (
                    <div className='flex flex-row'>
                      <div className='w-[20%] flex items-center justify-center py-2'>
                        <svg width="0.5vh" height="13.12vh" viewBox="0 0 4 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="2" y1="2" x2="2" y2="103" stroke="white" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 8"/>
                        </svg>
                      </div>
                      <div className='w-[80%] text-start flex items-center text-[2.4vh] font-inter gap-4'>
                        <svg width="4.4vh" height="6.6vh" viewBox="0 0 35 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.4688 10.4688C23.0921 10.4688 25.2188 8.3421 25.2188 5.71875C25.2188 3.0954 23.0921 0.96875 20.4688 0.96875C17.8454 0.96875 15.7188 3.0954 15.7188 5.71875C15.7188 8.3421 17.8454 10.4688 20.4688 10.4688Z" fill="white"/>
                          <path d="M32.522 24.2438L26.4063 22.225C26.4063 22.225 23.022 14.3875 22.9032 14.15C22.072 12.6656 20.5282 11.6562 18.747 11.6562C18.0345 11.6562 17.322 11.8344 16.7282 12.1312L8.41572 15.3969C7.82197 15.6344 7.34697 16.1094 7.10947 16.7031L4.14072 23.8281C3.66572 25.0156 4.2001 26.4406 5.44697 26.9156C5.74385 27.0344 6.04072 27.0938 6.3376 27.0938C7.2876 27.0938 8.17822 26.5594 8.53447 25.6094L10.9688 19.4344L13.4626 18.4844L9.36572 38.4937L1.40947 48.1719C0.578221 49.1813 0.696971 50.6656 1.70635 51.4969C2.12197 51.8531 2.65635 52.0312 3.19072 52.0312C3.90322 52.0312 4.55635 51.7344 5.03135 51.1406L13.3438 41.0469C13.5813 40.75 13.7595 40.3938 13.8188 40.0375L15.2438 33.15L21.6563 37.7812V49.6562C21.6563 50.9625 22.7251 52.0312 24.0313 52.0312C25.3376 52.0312 26.4063 50.9625 26.4063 49.6562V36.5938C26.4063 35.8219 26.0501 35.1094 25.4563 34.6938L19.697 30.4781L21.3001 22.4625L22.4282 25.075C22.7251 25.6687 23.2001 26.1437 23.8532 26.3812L30.9782 28.7563C31.2157 28.8156 31.4532 28.875 31.7501 28.875C32.7595 28.875 33.6501 28.2219 34.0063 27.2719C34.422 26.025 33.7688 24.6594 32.522 24.2438Z" fill="white"/>
                        </svg>
                        <h1 className='leading-[110%] font-inter'>Na estação<br></br><span className='font-bold'>{fim.nome}</span><br></br>troque de linha</h1>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className=' mx-4 flex flex-row mb-6'>
            <div className=' w-[20%] flex items-center justify-center'>
              <svg width="6vh" height="6vh" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9999 3.66675C13.9333 3.66675 7.33325 10.2667 7.33325 18.3334C7.33325 28.2334 20.1666 39.4167 20.7166 39.9668C21.4499 40.5168 22.3666 40.5168 23.0999 39.9668C23.8333 39.4167 36.6666 28.2334 36.6666 18.3334C36.6666 10.2667 30.0666 3.66675 21.9999 3.66675ZM21.9999 25.6667C17.9666 25.6667 14.6666 22.3667 14.6666 18.3334C14.6666 14.3001 17.9666 11.0001 21.9999 11.0001C26.0333 11.0001 29.3333 14.3001 29.3333 18.3334C29.3333 22.3667 26.0333 25.6667 21.9999 25.6667Z" fill={coresDasLinhas[dadosRota[dadosRota.length - 1][0].linha]}/>
              </svg>
            </div>
            <div className=' w-[80%] flex flex-col text-start'>
              <h1 className='font-inter italic leading-[160%] text-[2vh]'>Destino<br></br><span className='font-xxgeom font-bold text-[3vh] not-italic'>{dadosRota[dadosRota.length - 1][1].nome}</span></h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center text-center text-white px-2">
          <p>Não foi possível encontrar uma rota com esses dados.</p>
          <button
            onClick={() => router.push('/tela_principal')}
            className="bg-white text-black px-4 py-2 rounded-lg mt-5 hover:bg-gray-200 transition"
          >
            Voltar para a Home
          </button>
        </div>
      )}
    </div>
  );
}
