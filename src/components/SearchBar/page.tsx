// components/SearchBar/SearchBar.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex w-full max-w-[500px] mx-auto relative z-20"
    >
      <input
        type="text"
        placeholder="Para qual estação deseja ir?"
        className="w-full px-5 py-2.5 rounded-full shadow-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link href="/pagina_pesquisa">
        <button
          type="submit"
          className="absolute top-0 right-0 h-full px-6 bg-blue-600 text-white rounded-r-full hover:bg-blue-800 transition-colors"
        >
          Pesquisar
        </button>
      </Link>
    </form>
  );
};

export default SearchBar;