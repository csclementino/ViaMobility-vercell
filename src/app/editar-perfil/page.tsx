'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navegacao from '@/components/barra_navegacao/page';

const EditarPerfil = () => {
  const router = useRouter();
  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      router.push('/'); 
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.back(); // Volta para a página anterior
  };

  return (
    <div className="max-w-2xl mx-auto min-h-screen p-4">
      {/* Cabeçalho */}
      <div className="bg-neutral-700 p-6 rounded-2xl mb-20">
        <div className="text-right">
          <button
            onClick={() => router.back()}
            className="text-blue-600 font-medium"
          >
            Voltar
          </button>
        </div>
        <div className="flex justify-between items-center mb-3 border-b border-neutral-400">
          <h1 className="text-xl font-bold ml-4 mb-2">Editar informações</h1>
        </div>

        {/* Formulário de edição */}
        <form onSubmit={handleSubmit} className="space-y-6 p-5">
          {/* Seção Nome */}
          <div>
            <div className="flex flex-col gap-4 text-left">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nome *
                </label>
                <input
                  type="text"
                  defaultValue="Carlos"
                  className="w-full p-3 border-b text-neutral-300 border-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Sobrenome *
                </label>
                <input
                  type="text"
                  defaultValue="Clementino"
                  className="w-full p-3 border-b text-neutral-300 border-white"
                  required
                />
              </div>
            </div>
          </div>

          {/* Seção Data de Nascimento */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Data de Nascimento *</h2>
            <input
              type="text"
              defaultValue="24/08/2005"
              className="w-full pl-5 p-3 bg-neutral-500 rounded-4xl"
              required
            />
          </div>

          {/* Opções de edição */}
          <div className="space-y-4">
            <Link href="/criar_nova_senha">
              <div className="p-3 pl-5 mb-4 bg-neutral-500 rounded-4xl flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                <span className="font-medium">Modificar senha</span>
              </div>
            </Link>

            <Link href="/tela_atualizar_email">
              <div className="p-3 pl-5 mb-4 bg-neutral-500 rounded-4xl flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                <span className="font-medium">Atualizar e-mail</span>
              </div>
            </Link>

            <Link href="/tela_atualizar_telefone">
              <div className="p-3 pl-5 mb-4 bg-neutral-500 rounded-4xl flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                <span className="font-medium">Alterar número de telefone</span>
              </div>
            </Link>
          </div>

          {/* Botão de salvar */}
          <div className="pt-6 mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-4xl font-medium hover:bg-blue-700 transition-colors"
            >
              Salvar alterações
            </button>
          </div>
        </form>
      </div>

      <Navegacao ativo="perfil"/>
    </div>
  );
};

export default EditarPerfil;