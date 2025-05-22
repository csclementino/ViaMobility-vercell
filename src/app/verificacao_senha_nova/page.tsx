'use client'

import Link from "next/link";
import TituloAzul from "@/components/TituloAzul/page";
import CodigoVerificacao from "@/components/codigoVerificacao/page";
import { useState } from 'react';
import Botao from "@/components/botaoGradienteVerdeAzul/page";

const App = () => {
  const [codigo, setCodigo] = useState('');

  const handleChange = (valor: string) => {
    setCodigo(valor);
  };

  return (
    <div>
      <CodigoVerificacao valor={codigo} onChange={handleChange} />
    </div>
  );
};

export default function Login() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly rounded-lg space-y-6">
      <TituloAzul texto="Verificação por E-mail" />
      <h2 className="text-white text-center mb-4 px-4">
        Verifique o código recebido por e-mail e digite abaixo:
      </h2>
      <App />
      <Link href="/criar_nova_senha" className="mt-4">
        <Botao texto="Enviar" />
      </Link>
    </div>
  )
}