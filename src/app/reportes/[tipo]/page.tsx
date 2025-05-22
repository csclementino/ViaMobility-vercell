'use client';

import { useParams } from 'next/navigation';
import { CadastroReporteForm } from '@/components/CadastroReporteForm/page';

const CadastroReportePage = () => {
  const params = useParams();
  const tipoReporte = params.tipo as string;

  return (
    <div className="min-h-screen bg-neutral-900 px-4 py-8 flex flex-col">
        <CadastroReporteForm tipoReporte={tipoReporte} />
    </div>
  );
};

export default CadastroReportePage;
