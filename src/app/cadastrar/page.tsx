import FormularioCadastro from "@/components/formularioCadastro/FormularioCadastro";

export default function Login() {
    return (
    <>
        <div className="relative h-screen ">
          <img
            src="/background-cadastro.jpg"
            className="fixed top-0 left-0 w-full h-full object-cover z-0"
            alt="fundo"
          />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <FormularioCadastro></FormularioCadastro>
          </div>
        </div>
        
    </>
    )
  }