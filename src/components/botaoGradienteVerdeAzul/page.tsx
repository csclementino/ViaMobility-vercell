type BotaoProps = {
  texto?: string;
  gradiente?: string; 
  textoCor?: string;  
  clicado?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset"; // <-- novo
};

const Botao: React.FC<BotaoProps> = ({
  texto = "Click",
  gradiente = "from-[#00F798] to-[#3187FE]", 
  textoCor = "text-black", 
  clicado,
  className = "",
  type = "button", 
}) => {
  return (
    <button
      type={type}
      className={`h-10 w-45 bg-gradient-to-r justify-center flex items-center ${gradiente} ${textoCor} font-quache text-lg px-5 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      onClick={clicado}
    >
      {texto}
    </button>
  );
};

export default Botao;
