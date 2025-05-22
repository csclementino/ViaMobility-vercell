'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Botao from '@/components/botaoGradienteVerdeAzul/page';
import { useRouter } from 'next/navigation';

const UpdatePhoneScreen = () => {
  const [novoTelefone, setNovoTelefone] = useState('');
  const [mostrarCampo, setMostrarCampo] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      router.push('/');
    }
  }, [router]);

  const handleAtualizarClick = () => {
    setMostrarCampo(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para atualizar o telefone
    // Após atualizar, redirecionar de volta ao perfil
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-8 bg-gradient-to-b from-[#2d2d2d] via-[#1a1a1a] via-50% to-[#000000]">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Atualizar número de telefone
      </h1>
      
      <div className="max-w-2xl w-full px-4 py-8">
        <div className="text-center space-y-4 mb-8">
          <p className="text-gray-300 text-lg">
            Seu número de telefone atual é: <span className="font-medium">11 972935394</span>
          </p>
          <p className="text-gray-400 text-sm">
            Mudar de número de telefone não afetará as informações do trajeto ou quaisquer outras informações da sua conta
          </p>
        </div>

        <div className="border-t border-gray-700 my-8" />

        {!mostrarCampo ? (
          <div className="flex flex-col items-center">
            <button 
              onClick={handleAtualizarClick}
              className="w-full mb-4"
            >
              <Botao texto="Atualizar agora" />
            </button>
            
            <Link href="/pagina_perfil" className="block w-full">
              <Botao texto="Cancelar" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="novoTelefone" className="block text-gray-300 text-sm font-medium">
                Novo número de telefone
              </label>
              <input
                type="tel"
                id="novoTelefone"
                value={novoTelefone}
                onChange={(e) => setNovoTelefone(e.target.value)}
                placeholder="Digite o novo número"
                className="w-full p-4 bg-[#2d2d2d] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="text-gray-400 text-xs">
                Insira o novo número com DDD (ex: 11999998888)
              </p>
            </div>

            <div className="flex flex-col space-y-4 ">
              <Link href="/pagina_perfil">
                <Botao texto="Confirmar número" />
              </Link>            

              <Link href="/pagina_perfil">
                <Botao texto="Cancelar" />
              </Link>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

export default UpdatePhoneScreen;