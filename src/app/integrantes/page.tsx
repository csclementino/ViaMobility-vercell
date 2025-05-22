// app/tela_integrantes/page.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import Botao from '@/components/botaoGradienteVerdeAzul/page';

const IntegrantesPage = () => {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-[#2d2d2d] via-[#1a1a1a] via-50% to-[#000000] text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-12">
          ViaMobility
        </h1>
        
        <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
          <div className="space-y-8 mb-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Arthur Algate</h2>
                <span className="text-gray-400 text-sm">RM 560109 | Turma 11DSQ</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Meu nome é Arthur Ribeiro Algate, tenho 18 anos e já morei nos Estados Unidos. 
                Sou músico, apaixonado por tecnologia e atualmente estudo Análise e Desenvolvimento de Sistemas.
              </p>
              <div className="border-t border-gray-700 my-6" />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Rafael Nonato</h2>
                <span className="text-gray-400 text-sm">RM 560634 | Turma 11DSQ</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Sou Rafael, tenho 29 anos e tenho grande paixão por inovação, tecnologia e programação. 
                Minhas maiores afinidades são com web design e programação Back-End. Além disso, sou também professor de inglês.
              </p>
              <div className="border-t border-gray-700 my-6" />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Carlos Santiago</h2>
                <span className="text-gray-400 text-sm">RM 561187 | Turma 11DSQ</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Sou formado em Técnico de Eletrônica, membro ativo do CFT e, atualmente, estou focado na área de 
                Tecnologia da Informação. Com sólida base técnica e experiência em projetos.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link href='/tela_principal'>
              <Botao texto='Retornar'/>
            </Link>
          </div>

          <footer className="text-center text-gray-500 mt-12 py-6">
            <p>© Todos os direitos reservados - Grupo ARC</p>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default IntegrantesPage;