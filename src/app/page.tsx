'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Botao from "@/components/botaoGradienteVerdeAzul/page";
import TituloAzul from "@/components/TituloAzul/page";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (usuarioId) {
      router.push('/tela_principal');
    }
  }, [router]);
    
  return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#2d2d2d] via-[#1a1a1a] to-[#000000]">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            src="/video-inicio.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(360deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_53.85%,rgba(55,55,55,0.7)_98.21%)]" />
        </div>
        <Header className="w-full items-start pl-10">
          <TituloAzul texto="Bem-Vindo!" />
          <h2 className="font-xxgeom text-left text-white text-2xl mt-1">Comece sua viagem</h2>
        </Header>

        <Footer className="gap-3 mb-10 content-center">
          <div className="space-y-4 w-full max-w-xs">
            <Link href="/credenciais" className="flex justify-center">
              <Botao texto="Login"/>
            </Link>
          </div>

          <Link 
            href="/cadastrar" 
            className=" font-kanit text-white hover:text-blue-300 transition-colors text-base"
          >
            Ainda não tem uma conta? Registre-se.
          </Link>
        </Footer>
      </div>
    )
}