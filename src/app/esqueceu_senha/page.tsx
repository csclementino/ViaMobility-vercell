'use client'

import React from 'react'
import Link from "next/link";
import TituloAzul from "@/components/TituloAzul/page";
import EmailInput from "@/components/formulario/EmailInput";
import Botao from '@/components/botaoGradienteVerdeAzul/page';

export default function Login() {
  const [email, setEmail] = React.useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly rounded-lg space-y-6">
      <TituloAzul texto="Esqueceu sua senha?" />
      <h2 className="text-white text-center mb-4 px-4">
        Digite seu e-mail para receber as instruções de redefinição de senha.
      </h2>
      <EmailInput value={email} onChange={handleEmailChange} />
      <Link href="/verificacao_senha_nova" className="mt-4">
        <Botao texto="Enviar" />
      </Link>
    </div>
  )
}