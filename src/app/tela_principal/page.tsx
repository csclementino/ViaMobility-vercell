// app/tela_principal/page.tsx
'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header_Principal from '@/components/header_principal/page';
import Navegacao from '@/components/barra_navegacao/page';
import { Parceiros } from '@/components/parceiros/page'
import { AcessoRapido } from '@/components/acessoRapido/page';

const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      router.push('/'); 
    }
  }, [router]);
  
  const buttons = [
    {
      texto: "Próximo trem",
      icone: "train.png",
      caminho: "/proximo-trem" // Caminho da página
    },
    {
      texto: "Status linha",
      icone: "line.png",
      caminho: "/pagina_linhas" // Caminho corrigido
    },
    {
      texto: "Reportes",
      icone: "report.png",
      caminho: "/reportes" // Novo caminho
    }
  ];

  const parceirosData = [
    {
      caminho: "logo_arc.png",
      titulo: "Arc Group",
      texto: "Startup de tecnologia \nfocada em inovação.",
      link: "/integrantes"
    },
    {
      caminho: "fiap.png",
      titulo: "Fiap",
      texto: "Faculdade referência \nem tecnologia.",
      link: "https://www.fiap.com.br/institucional/"
    },
    {
      caminho: "motiva.png",
      titulo: "Motiva",
      texto: "Operadora e gestora \ndas linhas.",
      link: "https://www.motiva.com.br/motiva/sobre-a-motiva/"
    },
  ];

  return (
    <div className="flex flex-col h-screen ">
      <div className="flex-1 flex flex-col">
        <Header_Principal/>

        <div className="relative pb-20 flex-1">
          <AcessoRapido
            titulo="Acesso rápido"
            botoes={buttons}
          />
          
          <section className="mt-10">
            <Parceiros titulo="Parceiros" parceiros={parceirosData} />
          </section>
        </div>
      </div>

      <Navegacao ativo="home" />
    </div>
  );
};

export default MainPage;