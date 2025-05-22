'use client'

import React, { useEffect } from 'react';
import Navegacao from '@/components/barra_navegacao/page';
import { useRouter } from 'next/navigation';

const PaginaMapa = () => {
  const router = useRouter();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      router.push('/'); // Redireciona para login se não estiver autenticado
    }
  }, [router]);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <iframe
          src="mapa.htm"
          className="w-full h-full border-none "
          title="Mapa interativo"
        />
      </div>
      <Navegacao ativo="mapa" />
    </div>
  );
};

export default PaginaMapa;
