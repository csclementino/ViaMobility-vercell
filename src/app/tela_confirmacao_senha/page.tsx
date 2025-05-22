// app/tela_confirmacao_senha/page.tsx
'use client'

import Link from 'next/link';
import Botao from '@/components/botaoGradienteVerdeAzul/page';
import TituloAzul from '@/components/TituloAzul/page';

const PasswordConfirmationScreen = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full px-4 py-8 text-center">
        <TituloAzul texto="Sua senha foi atualizada com sucesso!" />
        
        <p className="text-gray-300 text-lg my-8">
          Por favor, tente entrar novamente agora com a nova senha cadastrada!
        </p>

        <div className="border-t border-gray-700 my-8"></div>

        <Link href="/credenciais" className="mt-6 inline-block">
          <Botao texto="Login" />
        </Link>
      </div>
    </main>
  );
};

export default PasswordConfirmationScreen;