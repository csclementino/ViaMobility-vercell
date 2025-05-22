'use client';
import React, { useEffect, useState } from 'react';
import Navegacao from '@/components/barra_navegacao/page';
import BotaoVoltar from '@/components/BotaoVoltar/page';
import linhasData from '@/data/linhas_metro.json';
import { useRouter } from 'next/navigation';

type Reporte = {
    id: string;
    tipo: string;
    linha: string;
    data: string;
    hora: string;
    estacao: string;
    descricao: string;
    status: 'pendente' | 'analise' | 'resolvido';
};

const MeusReportesPage = () => {
    const [reportes, setReportes] = useState<Reporte[]>([]);
    const [editingReport, setEditingReport] = useState<Reporte | null>(null);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const usuarioId = localStorage.getItem('usuarioId');
        if (!usuarioId) {
            router.push('/');
            return; 
        }
        const fetchReportes = async () => {
            try {
                const response = await fetch(`https://viamobility-backend-dzb8a3hterh6d2ce.brazilsouth-01.azurewebsites.net/api/reportes/${usuarioId}`);
                const data = await response.json();

                if (data.sucesso && Array.isArray(data.dados_reportes)) {
                    const reportesFormatados: Reporte[] = data.dados_reportes.map((item: any) => ({
                        id: String(item.id_reporte),
                        tipo: item.tipo_reporte,
                        linha: String(item.id_linha),
                        data: item.data_ocorrencia,
                        hora: item.hora_ocorrencia,
                        estacao: item.nome_estacao,
                        descricao: item.descricao,
                        status: item.analisado === 'S' ? 'analise' : 'pendente',
                    }));

                    localStorage.setItem('reportes', JSON.stringify(reportesFormatados));
                    setReportes(reportesFormatados);
                }
            } catch (error) {
                console.error('Erro ao buscar reportes:', error);
            }
        };

        fetchReportes();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pendente': return 'bg-yellow-500';
            case 'analise': return 'bg-blue-500';
            case 'resolvido': return 'bg-green-500';
            default: return 'bg-gray-500';
        }
    };

    const handleEdit = (reporte: Reporte) => {
        setEditingReport(reporte);
        setShowModal(true);
    };

    const handleClearReports = () => {
        if (confirm('Tem certeza que deseja excluir todos os reportes? Esta ação não pode ser desfeita.')) {
            localStorage.removeItem('reportes');
            setReportes([]);
        }
    };

    const handleSave = () => {
        if (!editingReport) return;
        console.log('Reporte editado:', editingReport); 
        const updatedReportes = reportes.map(reporte =>
            reporte.id === editingReport.id ? editingReport : reporte
        );

        setReportes(updatedReportes);
        localStorage.setItem('reportes', JSON.stringify(updatedReportes));
        setShowModal(false);
    };

    return (
        <div className="min-h-screen">
            <main className="max-w-4xl mx-auto px-4 py-8">
                <div onClick={() => router.back()}>
                    <BotaoVoltar />
                </div>
                <h1 className="text-2xl font-bold text-white mb-6">Meus Reportes</h1>

                {reportes.length === 0 ? (
                    <div className="text-white text-center py-8">
                        Nenhum reporte cadastrado ainda
                    </div>
                ) : (
                    <div className="space-y-6 pb-10">
                        {reportes.map((reporte) => (
                            <div key={reporte.id} className="bg-neutral-600 rounded-2xl p-6 flex flex-col relative min-h-[200px]">
                                <button
                                    onClick={() => handleEdit(reporte)}
                                    className="hidden top-4 right-4 text-gray-300 hover:text-white z-10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </button>

                                <div className="flex flex-col gap-4 mb-4">
                                    <div className="text-left">
                                        <h1 className="text-gray-400 text-sm">Tipo de Reporte</h1>
                                        <h2 className="font-semibold text-white text-lg">{reporte.tipo}</h2>
                                    </div>

                                    <div className="space-y-3 grid grid-cols-2">
                                        <div className="flex items-center gap-3">
                                            <img src="/linhas.png" alt="Linha" className="w-6 h-6" />
                                            <span className="text-white">
                                            {linhasData[reporte.linha as keyof typeof linhasData]?.nome || reporte.linha}
                                            </span>                                        
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <img src="/hora.png" alt="Hora" className="w-6 h-6" />
                                            <div className="text-white">
                                                <p>{reporte.data}</p>
                                                <p>{reporte.hora}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <img src="/estacao.png" alt="Estação" className="w-6 h-6" />
                                            <span className="text-white">{reporte.estacao || 'Estação não selecionada'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${getStatusColor(reporte.status)} mt-auto -mx-6 -mb-6 p-3 rounded-b-2xl`}>
                                    <span className="text-white text-sm">
                                        {reporte.status === 'analise' ? 'Reporte analisado' : `Reporte ${reporte.status}`}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-center items-center mb-20">
                    {reportes.length > 0 && (
                        <button
                            onClick={handleClearReports}
                            className="text-red-500 hidden hover:text-red-400 items-center gap-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Limpar todos
                        </button>
                    )}
                </div>

                {showModal && editingReport && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-neutral-700 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                            <h2 className="text-xl text-left font-bold text-white mb-4 border-b">Editar Reporte</h2>

                            <div className="space-y-4">
                                <div className="text-left">
                                    <label className="text-lg">Tipo de Reporte</label>
                                    <h2 className="text-gray-300 block mb-2">{editingReport.tipo}</h2>
                                </div>

                                <div>
                                    <select
                                        value={editingReport.linha}
                                        onChange={(e) => {
                                            const novaLinha = e.target.value;
                                            setEditingReport({
                                                ...editingReport,
                                                linha: novaLinha,
                                                estacao: ''
                                            });
                                        }}
                                        className="bg-neutral-600 text-white rounded-lg p-2 w-full"
                                    >
                                        <option value="">Selecione uma linha</option>
                                        {Object.entries(linhasData).map(([key, linha]) => (
                                            <option key={key} value={key}>
                                                {linha.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <select
                                        value={editingReport.estacao}
                                        onChange={(e) => setEditingReport({ ...editingReport, estacao: e.target.value })}
                                        className="bg-neutral-600 text-white rounded-lg p-2 w-full"
                                        disabled={!editingReport.linha}
                                    >
                                        <option value="">Selecione uma estação</option>
                                        {editingReport.linha &&
                                            linhasData[editingReport.linha as keyof typeof linhasData]?.estacoes.map((station) => (
                                                <option key={station.sigla} value={station.sigla}>
                                                {station.nome}
                                                </option>
                                            ))
                                            }
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="date"
                                        value={editingReport.data}
                                        onChange={(e) => setEditingReport({ ...editingReport, data: e.target.value })}
                                        className="bg-neutral-600 text-white rounded-lg p-2 w-full"
                                    />
                                    <input
                                        type="time"
                                        value={editingReport.hora}
                                        onChange={(e) => setEditingReport({ ...editingReport, hora: e.target.value })}
                                        className="bg-neutral-600 text-white rounded-lg p-2 w-full"
                                    />
                                </div>

                                <textarea
                                    value={editingReport.descricao}
                                    onChange={(e) => setEditingReport({ ...editingReport, descricao: e.target.value })}
                                    className="bg-neutral-600 text-white rounded-lg p-2 w-full h-32"
                                />
                            </div>

                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-gray-300 hover:text-white"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Confirmar Alteração
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <Navegacao ativo="home" />
            </main>
        </div>
    );
};

export default MeusReportesPage;
