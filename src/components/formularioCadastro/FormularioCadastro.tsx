'use client';

import React, { useState } from 'react';
import EmailInput from '@/components/formulario/EmailInput';
import SenhaInput from '@/components/formulario/SenhaInput';
import NomeInput from '@/components/formularioCadastro/NomeInput';
import ConfirmarSenhaInput from '@/components/formularioCadastro/ConfirmarSenhaInput';
import Botao from '../botaoGradienteVerdeAzul/page';
import Link from 'next/link';
import TituloAzul from '../TituloAzul/page';

const FormularioCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  // Função simples para validar email com regex
  const validarEmail = (email: string) => {
    // Regex básica para email válido
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMensagem('');

    // Validar campos preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    // Validar email
    if (!validarEmail(email)) {
      setMensagem('Formato de e-mail inválido.');
      return;
    }

    // Verificar se senha e confirmação são iguais
    if (senha !== confirmarSenha) {
      setMensagem('Senha e confirmação de senha não coincidem.');
      return;
    }

    // Tudo validado, pode enviar para a API
    setLoading(true);

    try {
      const response = await fetch('https://viamobility-backend-dzb8a3hterh6d2ce.brazilsouth-01.azurewebsites.net/api/cadastrar-usuario', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data === true || data.sucesso) {
          setMensagem('Passageiro cadastrado com sucesso!');
          // Opcional: limpar campos
          setNome('');
          setEmail('');
          setSenha('');
          setConfirmarSenha('');
        } else {
          // Caso a API retorne algo diferente de sucesso
          setMensagem(data.mensagem || 'Erro ao cadastrar passageiro.');
        }
      } else {
        setMensagem(data.mensagem || 'Erro na requisição.');
      }
    } catch (error) {
      setMensagem('Erro na comunicação com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-5 h-full items-center justify-center "
    >
      <div className='flex flex-row'>
        <div className='flex items-center flex-col'>
          <div className='relative flex flex-row  w-full mt-26'>
            <Link href="/">
              <img src="/back-blue.png" alt="voltar" className='h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2'/>
            </Link>
            <div className='flex items-center w-full justify-center'>
              <TituloAzul texto="Cadastrar-se"/>
            </div>
          </div>
          <div className=' ml-[18%] mr-[18%] mt-4'>
            <h1 className='font-inter text-sm'>
              Crie seu cadastro conosco e tenha acesso aos nossos serviços
            </h1>
          </div> 
        </div>
      </div>

      <div className='flex flex-col gap-8 pl-8 pr-8 mt-5 mb-14'>
        <NomeInput value={nome} onChange={(event) => setNome(event.target.value)} />
        <EmailInput value={email} onChange={(event) => setEmail(event.target.value)} />
        <SenhaInput value={senha} onChange={(event) => setSenha(event.target.value)} />
        <ConfirmarSenhaInput value={confirmarSenha} onChange={(event) => setConfirmarSenha(event.target.value)} />
        <h1 className='font-inter text-sm text-[#5C5C5C] text-left'>
          Ao se inscrever, você está concordado com nossos <span className='text-[#019DB8]'>termos de uso</span> e <span className='text-[#019DB8]'>política de privacidade</span>.
        </h1>
      </div>
      
      {mensagem && (
        <p className="text-center text-red-600 font-medium mb-4">{mensagem}</p>
      )}

      <div className='flex justify-end'>
        <button type="submit" disabled={loading} className="cursor-pointer">
          <Botao texto={loading ? 'Carregando...' : 'Criar Conta'} />
        </button>
      </div>
    </form>
  );
};

export default FormularioCadastro;
