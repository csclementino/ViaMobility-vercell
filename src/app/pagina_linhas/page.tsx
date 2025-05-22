// app/tela_principal/page.tsx
'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // <-- CORRETO para Next.js
import Navegacao from '@/components/barra_navegacao/page';
import LinhasStatus from '@/components/conteudo_linhas/page';

const PaginaLinhas = () => {
  const router = useRouter();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      router.push('/'); 
    }
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col">
        <div className="relative pb-20 flex-1">      
          <LinhasStatus />
        </div>
      </div>

      <Navegacao ativo="home" />
    </div>
  );
};

export default PaginaLinhas;
