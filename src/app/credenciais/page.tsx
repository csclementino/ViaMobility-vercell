import Link from "next/link";
import Formulario from "@/components/formulario/Formulario";
import TituloAzul from "@/components/TituloAzul/page";
import Footer from "@/components/Footer/page";

export default function Credenciais() {
  return (
    <>
      <div className="relative h-screen ">
        <img
          src="/background-login.jpg"
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
          alt="fundo"
        />
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col">
            <div className="mb-4 w-full h-[20%] flex flex-row items-center gap-2.5 pl-3">
              <Link href="/">
              <img src="/back-white.png" alt="botao voltar"
                className="w-7 h-7"
              />
              </Link>
              <h1 className={`font-xxgeom text-white text-3xl leading-8 text-left`}>
                Insira suas<br></br>credenciais
              </h1>
            </div>
            <div className="w-full h-[80%] flex flex-col items-center">
              <Formulario />
              <Link href="/esqueceu_senha" className="font-kanit w-full h-full mt-3 ">Esqueceu a senha?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}