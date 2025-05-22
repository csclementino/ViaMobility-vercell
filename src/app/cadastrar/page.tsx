import FormularioCadastro from "@/components/formularioCadastro/FormularioCadastro";
import Image from 'next/image';

export default function Login() {
    return (
    <>
        <div className="relative h-screen ">
          <Image
          src="/background-cadastro.jpg"
          alt="fundo"
          fill
          className="fixed top-0 left-0 object-cover z-0"
        />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <FormularioCadastro></FormularioCadastro>
          </div>
        </div>
        
    </>
    )
  }