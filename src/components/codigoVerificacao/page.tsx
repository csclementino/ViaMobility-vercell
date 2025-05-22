'use client';

import React, { useState } from 'react';

interface CodigoVerificacaoProps {
  valor: string;
  onChange: (valor: string) => void;
  erro?: string;
}

const CodigoVerificacao: React.FC<CodigoVerificacaoProps> = ({
  valor,
  onChange,
  erro,
}) => {
  const [codigo, setCodigo] = useState(valor);
  const [erroInterno, setErroInterno] = useState<string | null>(erro ?? null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    if (valor.length > 4) {
      setErroInterno('Código de verificação deve ter 4 dígitos');
    } else {
      setErroInterno(null);
    }
    setCodigo(valor);
    onChange(valor);
  };

  return (
    <div className="flex flex-col items-center justify-between h-[50%]">
      <input
        type="text"
        value={codigo}
        onChange={handleChange}
        maxLength={4}
        className={`w-[60%] h-10 px-2.5 border rounded text-base text-center ${
          erroInterno ? 'border-red-500' : 'border-[#ccc]'
        }`}
      />
      {erroInterno && (
        <span className="text-red-500 text-sm mt-1">{erroInterno}</span>
      )}
    </div>
  );
};

export default CodigoVerificacao;