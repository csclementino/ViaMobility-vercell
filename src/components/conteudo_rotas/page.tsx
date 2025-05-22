// components/conteudo_rotas/page.tsx
import React from 'react';

interface FavoriteItem {
  station: string;
  line: string;
  address: string;
}

interface RecentItem {
  station: string;
  line: string;
  address: string;
  checked: boolean;
}

const MainContent: React.FC = () => {
  const favorites: FavoriteItem[] = [
    {
      station: "Estação - Penha",
      line: "Linha 3 vermelha",
      address: "R. Alvinópolis, 178 - Vila Beatriz, São Paulo"
    }
  ];

  const recents: RecentItem[] = [
    {
      station: "Estação - Vila Matilde",
      line: "Linha 3 vermelha",
      address: "R. Joaquim Marra, 418",
      checked: true
    },
    {
      station: "Estação - Tatuapé",
      line: "Linha 3 vermelha",
      address: "R. Melo Freire - Tatuapé, São Paulo - SP",
      checked: true
    }
  ];

  return (
    <div className="px-1 py-5 max-w-[600px] mx-auto">
      <div className="p-5 mb-5 bg-[rgb(2,43,119)] shadow-md rounded-lg">
        <h2 className="text-base font-semibold mb-4 pb-2 border-b-2 border-gray-200">Favoritos</h2>
        {favorites.map((item, index) => (
          <div key={index} className="grid grid-cols-[40px,1fr,40px] gap-4 py-3 relative">
            <div className="flex items-center justify-center">
              <img 
                src="localizacao.png" 
                alt="Localização" 
                className="w-6 h-6"
                style={{ filter: 'invert(40%) sepia(13%) saturate(1273%) hue-rotate(176deg) brightness(92%) contrast(87%)' }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">{item.station}</h3>
                <span className="text-sm px-2 py-1 rounded bg-gray-100">{item.line}</span>
              </div>
              <p className="text-xs text-gray-300 leading-tight">{item.address}</p>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="estrela.png" 
                alt="Favorito" 
                className="w-5 h-5"
                style={{ filter: 'invert(68%) sepia(61%) saturate(4572%) hue-rotate(358deg) brightness(103%) contrast(106%)' }}
              />
            </div>
            {index < favorites.length - 1 && (
              <div className="absolute bottom-0 left-4 right-4 border-b border-gray-200" />
            )}
          </div>
        ))}
      </div>

      <div className="p-5 mb-5 bg-[rgb(2,43,119)] shadow-md rounded-lg">
        <h2 className="text-base font-semibold mb-4 pb-2 border-b-2 border-gray-200">Recentes</h2>
        {recents.map((item, index) => (
          <div key={index} className="grid grid-cols-[40px,1fr,40px] gap-4 py-3 relative">
            <div className="flex items-center justify-center">
              <img 
                src="localizacao.png" 
                alt="Localização" 
                className="w-6 h-6"
                style={{ filter: 'invert(40%) sepia(13%) saturate(1273%) hue-rotate(176deg) brightness(92%) contrast(87%)' }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">{item.station}</h3>
                <span className="text-sm px-2 py-1 rounded bg-gray-100">{item.line}</span>
              </div>
              <p className="text-xs text-gray-300 leading-tight">{item.address}</p>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="estrela.png" 
                alt="Favorito" 
                className="w-5 h-5"
                style={{ filter: 'invert(68%) sepia(61%) saturate(4572%) hue-rotate(358deg) brightness(103%) contrast(106%)' }}
              />
            </div>
            {index < recents.length - 1 && (
              <div className="absolute bottom-0 left-4 right-4 border-b border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;