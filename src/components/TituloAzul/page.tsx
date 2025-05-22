import React from "react"

type TituloAzulProps = { 
  texto?: string
}

const TituloAzul: React.FC<TituloAzulProps> = ({ 
  texto = "Titulo Azul"
}) => {
  return (
    <h1 className={`font-xxgeom text-[#03FFF6] text-4xl`}>
      {texto}
    </h1>
  )
}

export default TituloAzul