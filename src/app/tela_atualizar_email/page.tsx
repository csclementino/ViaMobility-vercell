'use client'

import Link from 'next/link';
import Botao from '@/components/botaoGradienteVerdeAzul/page';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const UpdateEmailScreen = () => {
    const router = useRouter();
    useEffect(() => {
      const usuarioId = localStorage.getItem('usuarioId');
      if (!usuarioId) {
        router.push('/'); 
      }
    }, [router]);
  return (
    <main className="min-h-screen flex flex-col items-center p-8 bg-gradient-to-b from-[#2d2d2d] via-[#1a1a1a] via-50% to-[#000000] text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Atualizar endereço de e-mail</h1>
      
      <div className="max-w-2xl w-full px-4 py-8">
        <div className="text-center space-y-4 mb-8">
          <p className="text-gray-300 text-lg">Seu e-mail atual é usuario@*****.com</p>
          <p className="text-gray-400 text-sm">
            A alteração do e-mail requer confirmação por mensagem enviada para o novo endereço
          </p>
        </div>

        <div className="border-t border-gray-700 my-8" />

        <form className="space-y-6">
          <div className="input-group">
            <label htmlFor="new-email" className="text-gray-300 mb-2 block">
              Novo e-mail
            </label>
            <input
              type="email"
              id="new-email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite o novo e-mail"
            />
          </div>
          
          <Link href="/pagina_perfil">
            <Botao texto="Atualizar agora" />
          </Link>
        </form>

        <div className="mt-6">
          <Link href="/pagina_perfil">
            <Botao 
              texto="Cancelar"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UpdateEmailScreen;