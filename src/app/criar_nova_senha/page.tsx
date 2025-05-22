'use client';

import Link from "next/link";
import TituloAzul from "@/components/TituloAzul/page";
import SenhaInput from "@/components/formulario/SenhaInput";
import ConfirmarSenhaInput from "@/components/formularioCadastro/ConfirmarSenhaInput";
import React, {useEffect } from "react";
import { useState } from 'react';
import Botao from "@/components/botaoGradienteVerdeAzul/page";
import { useRouter } from "next/navigation";

export default function Login() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const router = useRouter();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (!usuarioId) {
      router.push('/'); 
    }
  }, [router]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly rounded-lg space-y-6">
      <TituloAzul texto="Criar nova senha" />
      <h2 className="text-white text-center mb-4 px-4">
        Digite uma nova senha para acessar sua conta com segurança:
      </h2>
      <SenhaInput value={senha} onChange={(e) => setSenha(e.target.value)} />
      <ConfirmarSenhaInput value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
      <Link href="/tela_confirmacao_senha" className="mt-4">
        <Botao texto="Enviar" />
      </Link>
    </div>
  )
}