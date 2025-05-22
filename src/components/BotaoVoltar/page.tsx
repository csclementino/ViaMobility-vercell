// components/BotaoVolta.tsx
'use client'



const BotaoVoltar = () => {
  return (
      <button
        className="flex items-center justify-center"
        aria-label="Voltar"
      >
        <img src="/back-white.png" alt="botao voltar" 
        className='w-6 h-6'
        />
      </button>
  )
}

export default BotaoVoltar