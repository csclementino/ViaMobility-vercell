import React from 'react';

interface NomeInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NomeInput: React.FC<NomeInputProps> = ({ value, onChange }) => {
  return (
    <div className="form-group flex flex-row border-b-[2px] border-b-white">
      <div className='ml-1 w-[15%] h-full flex mb-0.5 justify-center '>
        <img src="/user-icon.png" alt="email icon" className='w-7 h-7' />
      </div>
      <input
        type="text"
        id="nome"
        name="nome"
        value={value}
        onChange={onChange}
        placeholder="Nome completo"
        className="ml-2 block w-full font-inter text-sm pr-3 focus:outline-none"
      />
    </div>
  );
};

export default NomeInput;