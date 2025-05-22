import React, { useState, useRef } from 'react';

interface Parceiro {
    caminho: string;
    titulo: string;
    texto: string;
    link: string;
}

interface ParceirosProps {
    titulo: string;
    parceiros: Parceiro[];
}

export const Parceiros = ({ titulo, parceiros }: ParceirosProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (carouselRef.current) {
            const newSlide = currentSlide + 1;
            carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
            setCurrentSlide(newSlide);
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            const newSlide = currentSlide - 1;
            carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
            setCurrentSlide(newSlide);
        }
    };

    return (
        <div className="relative px-[5vh] mt-[4vh] ">
            <h2 className="text-white font-xxgeom text-[2.4vh] text-center mb-4 relative">{titulo}</h2>
            <div
                ref={carouselRef}
                className="flex overflow-x-hidden scroll-smooth  bg-[#323232] rounded-[2.5vh] snap-x snap-mandatory"
            >
                {parceiros.map((parceiro, index) => (
                    <div
                        key={index}
                        className="min-w-full flex-shrink-0 snap-align-start transition-transform duration-300"
                    >
                        <div className=" flex items-center text-left">
                            <img
                                src={parceiro.caminho}
                                alt={parceiro.titulo}
                                className="rounded-tl-[2.5vh] rounded-tr-[2.5vh] rounded-br-none rounded-bl-[2.5vh] w-auto h-full object-cover"
                            />
                            <div className="flex flex-col gap-1 text-white ml-3">
                                <h3 className="text-[16px] font-xxgeom">{parceiro.titulo}</h3>
                                <p className="text-[1.7vh] leading-[100%] font-inter text-[#ccc] whitespace-pre-line">
                                    {parceiro.texto}
                                </p>
                                <a
                                    href={parceiro.link}
                                    className=" gap-1.5 flex flex-row items-center hover:opacity-80 transition-opacity"
                                >
                                    <p className='text-[white] font-inter text-[1rem] font-medium'>
                                        Saiba mais
                                    </p>
                                    <img src="back-white.png" alt="mais info" 
                                    className='w-3 h-3 rotate-180'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className={` flex items-center justify-center absolute top-20 -translate-y-1/3 left-0 border-none text-white text-3xl w-12 h-12 rounded-full cursor-pointer transition-colors ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                onClick={handlePrev}
                disabled={currentSlide === 0}
            >
                <img src="seta.png" alt="seta" 
                    className='w-4 h-4'
                />
            </button>
            <button
                className={`flex items-center justify-center absolute top-20 -translate-y-1/3 right-0 border-none text-white text-3xl w-12 h-12 rounded-full cursor-pointer transition-colors ${currentSlide === parceiros.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                onClick={handleNext}
                disabled={currentSlide === parceiros.length - 1}
            >
                <img src="seta.png" alt="seta" 
                    className='w-4 h-4 rotate-180'
                />
            </button>
        </div>
    );
};