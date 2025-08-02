export default function OrigemLoading() {
  return (
    <div className="relative h-screen">
      {/* Imagem de fundo pode ser um cinza escuro para o loading */}
        <img
        src="/origem-image2.webp"
        className="fixed top-0 left-0 w-full h-full object-cover z-0 "
        alt="fundo"
      />

      {/* Placeholder do botão de voltar */}
      <div className='fixed z-10 px-[2.4vh] flex flex-col pt-[7vh]'>
        <div className="w-[3.8vh] h-[3.8vh] bg-gray-700 rounded-md animate-pulse"></div>
      </div>

      {/* Placeholder do card inferior */}
      <div className="fixed rounded-t-[40px] bottom-0 left-0 w-full bg-[#363636] shadow-md z-50 px-[3vh] animate-pulse">
        {/* Placeholder do Título */}
        <div className="h-[4vh] w-3/4 bg-gray-500 rounded mt-[3vh]"></div>
        <div className="h-[4vh] w-1/2 bg-gray-500 rounded mt-2 mb-6"></div>

        {/* Placeholder do SeletorDeEstacao */}
        <div className="h-[50px] w-full bg-gray-500 rounded-lg"></div>

        {/* O botão de confirmar não precisa de placeholder, pois ele só aparece após a interação */}
      </div>
    </div>
  );

}
