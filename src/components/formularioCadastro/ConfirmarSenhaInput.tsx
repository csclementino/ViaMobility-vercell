import React from 'react';

interface ConfirmarSenhaInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConfirmarSenhaInput: React.FC<ConfirmarSenhaInputProps> = ({ value, onChange }) => {
  return (
    <div className="form-group flex flex-row border-b-[2px] border-b-white">
      <div className='ml-1 w-[15%] h-full flex mb-1.5 justify-center'>
        <img src="/lock.png" alt="email icon" className='w-6 h-6' />
      </div>
      <input
        type="password"
        id="confirmar-senha"
        name="confirmar-senha"
        value={value}
        onChange={onChange}
        placeholder="Confirmar senha"
        className="ml-2 block w-full font-inter text-sm pr-3 focus:outline-none"
      />
    </div>
  );
};

export default ConfirmarSenhaInput;