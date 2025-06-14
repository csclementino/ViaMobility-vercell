'use client'

import Navegacao from '@/components/barra_navegacao/page';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { UserProfile } from '@/data/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ProfileScreen = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<UserProfile>({
    id: '',
    imagemPerfil: 'icone_usuario.png',
    nome: '',
    sobrenome: '',
    tel: '',
    email: '',
    emailVerificado: false,
    dataNascimento: ''
  });

  const [profileImage, setProfileImage] = useState('icone_usuario.png');

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      router.push('/');
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await fetch(`https://viamobility-backend-dzb8a3hterh6d2ce.brazilsouth-01.azurewebsites.net/api/buscar-usuario/${usuarioId}`);
        if (!res.ok) throw new Error('Erro ao buscar dados do usuário');
        const data = await res.json();

        setUser({
          id: data.dados_user.id || '',
          imagemPerfil: 'icone_usuario.png',
          nome: data.dados_user.nome || 'Não informado',
          sobrenome: '',
          tel: 'Não informado',
          email: data.dados_user.email || 'Não informado',
          emailVerificado: data.emailVerificado ?? false,
          dataNascimento: data.dados_user.data_nascimento || 'Não informado'
        });

        setProfileImage('icone_usuario.png');
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push('/');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center mb-8 mt-8">Meu Perfil</h1>
      </div>

      <div className="relative flex items-center w-full h-20">
        <Link href="/editar_foto_perfil" className="absolute -bottom-16 left-6 w-20 h-32">
          <div className="border-4 border-white rounded-full overflow-hidden">
            <Image
              src={profileImage}
              alt="Foto do perfil"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
        </Link>
      </div>

      <div className="text-left m-6 mt-10">
        <h2 className="text-xl font-semibold">{user.nome} {user.sobrenome || ''}</h2>
        <p className="text-gray-500 mt-1">Usuário do Metrô SP</p>
      </div>

      <div className="rounded-2xl bg-[#2D2D2D] shadow p-5 m-4 relative">
        <div className="flex justify-between items-center mb-4 text-left">
          <h2 className="text-lg font-semibold text-white">Suas informações</h2>
          <Link href="/editar-perfil">
            <button className="text-blue-500 hover:text-blue-400 text-sm font-medium">
              Editar
            </button>
          </Link>
        </div>

        <div className="space-y-6 text-white text-left">
          <div>
            <p>Telefone</p>
            <p className="text-xs mt-1 text-gray-400">{user.tel}</p>
          </div>

          <div>
            <p>E-mail</p>
            <p className="text-xs mt-1 text-gray-400">{user.email}</p>
          </div>

          <div>
            <p>Data de nascimento</p>
            <p className="text-xs mt-1 text-gray-400">{user.dataNascimento}</p>
          </div>

          <div>
            <p>Nome completo</p>
            <p className="text-xs mt-1 text-gray-400">{user.nome} {user.sobrenome || ''}</p>
          </div>
        </div>
      </div>

      <div className="text-center py-4 mb-18">
        <button
          onClick={handleLogout}
          type="button"
          className="bg-red-700 px-20 py-2 rounded-2xl hover:bg-red-500 transition-colors flex items-center justify-center gap-2 mx-auto"
        >
          Sair
        </button>
      </div>

      <Navegacao ativo="perfil" />
    </div>
  );
};

export default ProfileScreen;
