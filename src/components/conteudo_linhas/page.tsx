'use client';
import React, { useEffect, useState } from 'react';
import BotaoVoltar from '@/components/BotaoVoltar/page';
import Link from 'next/link';

interface LinhaStatus {
  id: number;
  nome: string;
  cor: string;
  status: string; // Permite "Não disponível" além dos outros
}

const LinhasStatus: React.FC = () => {
  const [horaAtualizado, setHoraAtualizado] = useState<string>('');
  const [linhas, setLinhas] = useState<LinhaStatus[]>([
  { id: 1, nome: 'Azul', cor: 'bg-[#171796]', status: 'Indisponível' },
  { id: 2, nome: 'Verde', cor: 'bg-[#007A5E]', status: 'Indisponível' },
  { id: 3, nome: 'Vermelha', cor: 'bg-[#ED2E38]', status: 'Indisponível' },
  { id: 4, nome: 'Amarela', cor: 'bg-[#E4B33C]', status: 'Indisponível' },
  { id: 5, nome: 'Lilás', cor: 'bg-[#76509B]', status: 'Indisponível' },
  { id: 7, nome: 'Rubi', cor: 'bg-[#AC184A]', status: 'Indisponível' },
  { id: 8, nome: 'Diamante', cor: 'bg-[#AFA690]', status: 'Indisponível' },
  { id: 9, nome: 'Esmeralda', cor: 'bg-[#34AEA4]', status: 'Indisponível' },
  { id: 10, nome: 'Turquesa', cor: 'bg-[#17839C]', status: 'Indisponível' },
  { id: 11, nome: 'Coral', cor: 'bg-[#EB601F]', status: 'Indisponível' },
  { id: 12, nome: 'Safira', cor: 'bg-[#1B2477]', status: 'Indisponível' },
  { id: 13, nome: 'Jade', cor: 'bg-[#29B352]', status: 'Indisponível' },
  { id: 15, nome: 'Prata', cor: 'bg-[#8F8F8C]', status: 'Indisponível' },
  ]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch('https://viamobility-backend-dzb8a3hterh6d2ce.brazilsouth-01.azurewebsites.net/api/linhas');
        const data = await response.json();

        const atualizado = new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit'
        });

        setLinhas(prev => prev.map(linha => ({
          ...linha,
          status: data[`linha${linha.id}`]?.status || 'Não disponível'
        })));

        setHoraAtualizado(atualizado);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchDados();
  }, []);

  return (
    <div className="px-5 pt-[6vh] max-w-4xl mx-auto">
      <Link href="/tela_principal">
        <BotaoVoltar />
      </Link>
      <header className="text-center mb-8 mt-5">
        <h1 className="font-xxgeom text-[3.6vh] font-bold text-white mb-2">Operação das Linhas</h1>
        <p className="font-inter text-gray-300 text-[1.7vh]">Veja em tempo real como está o funcionamento das linhas do metrô antes de sair de casa</p>
      </header>

      <div>
        {linhas.map((linha, index) => (
          <div
            key={linha.id}
            className={`px-2 py-4 ${index !== linhas.length - 1 ? 'border-b border-gray-600' : ''}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`${linha.cor} w-8 h-8 flex items-center justify-center`}>
                  <span className="text-white font-bold">{linha.id}</span>
                </div>
                <h2 className="text-white font-xxgeom text-lg">{linha.nome}</h2>
              </div>

              <div className={`px-2 py-1 rounded-[7px] font-inter text-[1.5vh] text-white ${
                linha.status === 'Operação Normal'
                  ? 'bg-green-700'
                  : linha.status === 'Indisponível'
                    ? 'bg-gray-500'
                    : 'bg-yellow-600'
              }`}>
                {linha.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinhasStatus;
