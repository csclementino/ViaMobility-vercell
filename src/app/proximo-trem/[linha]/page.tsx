'use client';

import { useParams } from 'next/navigation';
import linhasData from '@/data/linhas_metro.json';
import BotaoVoltar from '@/components/BotaoVoltar/page';
import Link from 'next/link';

export default function LinhaPage() {
  const params = useParams();
  const slug = params.linha as string; // Ex: linha4, linha5...

  const linha = linhasData[slug as keyof typeof linhasData];

  if (!linha) {
    return <p className="text-white p-4">Linha não encontrada.</p>;
  }

  return (
    <div className="min-h-screen bg-[#242424] ">
      <div 
      className='px-5 flex flex-col pt-[7vh] gap-4'
      >
        <Link href="/proximo-trem">
          <BotaoVoltar/>
        </Link>
        <h1 className="text-[3.5vh] text-white font-xxgeom text-left">Em qual estação<br></br>da {linha.nome.toLowerCase()}?</h1>
      </div>

      <div className="space-y-3 p-6">
        {linha.estacoes.map((estacao, index) => (
          <Link
            key={index}
            href={{
              pathname: `/proximo-trem/${slug}/${estacao.sigla}`,
              query: {
                id: linha.id,
                conce: linha.conce,
              },
            }}
            className="flex flex-row justify-between items-center  p-4 border-b border-white/25 text-white font-xxgeom text-[2.5vh] hover:bg-neutral-700 transition"
          >
            {estacao.nome}
            <img src="/seta.png" alt="selecionar" className='ml-3 h-5 w-5 rotate-180' />
          </Link>
        ))}
      </div>
    </div>
  );
}
