'use client';

import React, { useState, useEffect } from 'react';
import BotaoVoltar from '@/components/BotaoVoltar/page';
import linhasData from '@/data/linhas_metro.json';
import { useRouter } from 'next/navigation';

type Estacao = {
  nome: string;
  sigla: string;
};

type Linha = {
  nome: string;
  id: string;
  estacoes: Estacao[];
};

type CadastroFormProps = {
  tipoReporte: string;
};

const CATEGORY_DATA: { [key: string]: { name: string; icon: string } } = {
  'assedio': { name: 'Assédio', icon: '/assedio.png' },
  'racismo': { name: 'Racismo', icon: '/racismo.png' },
  'roubo': { name: 'Roubo', icon: '/roubo.png' },
  'vandalismo': { name: 'Vandalismo', icon: '/vandalismo.png' },
  'violencia': { name: 'Violência', icon: '/violencia.png' },
  'venda-ilegal': { name: 'Venda Ilegal', icon: '/vendedor.png' }
};

export const CadastroReporteForm = ({ tipoReporte }: CadastroFormProps) => {
  type LinhaKey = 'linha4' | 'linha5' | 'linha8' | 'linha9';
  const [selectedLineKey, setSelectedLineKey] = useState<LinhaKey | ''>('');
  const [selectedLineName, setSelectedLineName] = useState("");
  const [stations, setStations] = useState<Estacao[]>([]);
  const [selectedStation, setSelectedStation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');
  const router = useRouter();
  const [formAlert, setFormAlert] = useState('');

  const linhas = Object.entries(linhasData) as [string, Linha][];

  useEffect(() => {
    if (selectedLineKey) {
      const estacoes = linhasData[selectedLineKey]?.estacoes || [];
      setStations(estacoes);
      setSelectedStation('');
    }
  }, [selectedLineKey]);

  const getCategoryData = () => CATEGORY_DATA[tipoReporte] || { name: 'Reporte', icon: '' };
  const { name: categoryName, icon: categoryIcon } = getCategoryData();

  return (
    <div className="min-h-screen">
      {formAlert && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in">
          {formAlert}
        </div>
      )}
      <main className="max-w-4xl mx-auto py-8">
        <section className=''>
          <div onClick={() => router.back()} >
            <BotaoVoltar />
          </div>
          <h1 className="mt-5 text-[3.7vh] font-xxgeom text-white mb-6">Cadastro de Reporte</h1>
          <div className="px-3 pt-4 space-y-6">
            {/* Tipo de Reporte */}
            <div className="bg-[#039F9F] px-4 py-3 rounded-2xl text-white">
              <div className="flex justify-between text-left items-center">
                <div>
                  <h2 className="text-[2.5vh] font-xxgeom mb-2">Tipo de Reporte</h2>
                  <p className="text-[2.2vh] font-inter">{categoryName}</p>
                </div>
                {categoryIcon && (
                    <img
                        src={categoryIcon}
                        alt="Ícone do Reporte"
                        className="w-[7.5vh] h-[7.5vh] filter invert brightness-0"
                    />
                )}
              </div>
            </div>

            {/* Linha */}
            <select
              className="focus:outline-none focus:ring-0 focus:border-neutral-500 w-full border-[3px] border-neutral-500 p-3 rounded-[13px] text-white font-xxgeom text-[2.1vh]"
              value={selectedLineKey}
              onChange={(e) => {
                const keySelecionada = e.target.value;
                setSelectedLineKey(keySelecionada as keyof typeof linhasData);

           
                const linhaSelecionada = linhas.find(([key]) => key === keySelecionada);
                if (linhaSelecionada) {
                  setSelectedLineName(linhaSelecionada[1].id); 
                  console.log("Nome da linha:", linhaSelecionada[1].id);
                }
              }}
            >
              <option value="" className="bg-neutral-700">Selecione uma linha</option>
              {linhas.map(([key, linha]) => (
                <option key={key} value={key} className="bg-neutral-600">
                  {linha.nome}
                </option>
              ))}
            </select>

            {/* Estação */}
            <div>
              <select
                className="focus:outline-none focus:ring-0 focus:border-neutral-500 w-full border-[3px] border-neutral-500 p-3 rounded-[13px] text-white font-xxgeom text-[2.1vh]"
                value={selectedStation}
                onChange={(e) => setSelectedStation(e.target.value)}
                disabled={!selectedLineKey}
              >
                <option value="" className="bg-neutral-700">Selecione uma estação</option>
                {stations.map((station) => (
                  <option key={station.sigla} value={station.sigla} className="bg-neutral-600">
                    {station.nome}
                  </option>
                ))}
              </select>
            </div>

            {/* Data e Hora */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-[2.5vh] font-xxgeom text-white mb-4">Data</h2>
                <input
                  type="date"
                  className="w-full border p-4 rounded-lg text-white"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <h2 className="text-[2.5vh] font-xxgeom text-white mb-4">Hora</h2>
                <input
                  type="time"
                  className="w-full border p-4 rounded-lg text-white"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            {/* Detalhes */}
            <div className='mt-8'>
              <h2 className="text-[2vh] font-xxgeom text-white mb-4">
                Dê mais detalhes sobre o ocorrido...
              </h2>
              <textarea
                className="w-full border p-4 rounded-lg text-white h-32"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                maxLength={200}
               />
            </div>

            {/* Botão */}
            <button
              type="button"
              onClick={async () => {
                const usuarioId = localStorage.getItem('usuarioId');

                if (!selectedLineKey || !selectedStation || !date || !time || !details.trim()) {
                  setFormAlert('Por favor, preencha todos os campos antes de enviar.');
                  setTimeout(() => setFormAlert(''), 4000); 
                  return;
                }

                const now = new Date();
                const dataCriacao = now.toISOString();

                const newReporte = {
                  id: Date.now().toString(),
                  tipo: categoryName,
                  linha: linhasData[selectedLineKey]?.id || '',
                  data: date,
                  hora: time,
                  estacao: selectedStation,
                  descricao: details,
                  status: 'pendente' as const
                };

                const body = {
                  id_usuario: usuarioId,
                  id_linha: selectedLineName,
                  id_estacao: selectedStation,
                  data_ocorrencia: date,
                  hora_ocorrencia: time,
                  categoria_reporte: categoryName,
                  descricao: details,
                  data_criacao: dataCriacao,
                };

                try {
                  const response = await fetch('https://viamobility-backend-dzb8a3hterh6d2ce.brazilsouth-01.azurewebsites.net/api/cadastrar-reporte', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                  });

                  const result = await response.json();

                  if (result.sucesso === true) {
                    const existingReportes = JSON.parse(localStorage.getItem('reportes') || '[]');
                    localStorage.setItem('reportes', JSON.stringify([...existingReportes, newReporte]));

                    window.location.href = '/reportes/status?status=sucesso';
                  } else if (result.recente) {
                    window.location.href = '/reportes/status?status=aguardando';
                  } else {
                    window.location.href = '/reportes/status?status=erro';
                  }
                } catch (error) {
                  console.error('Erro ao enviar reporte à API:', error);
                  window.location.href = '/reportes/status?status=erro';
                }
              }}
              className="bg-gradient-to-r from-[#01F49A] to-[#3089FB] shadow-[0_4px_4px_rgba(0,0,0,0.5)] rounded-[20px]  py-3 px-12  hover:bg-green-600 transition-colors"
            >
              <div className='text-white font-deja font-bold text-[3vh] flex flex-row items-center justify-center gap-3'>
                <h1>Enviar</h1>
                <img src="/send.png" alt="enviar icone" className='h-[4vh] w-[4vh]' />
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
