'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navegacao from '@/components/barra_navegacao/page';

const EditarFotoPerfil = () => {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const usuarioId = localStorage.getItem('usuarioId');
        if (!usuarioId) {
            router.push('/');
        }
    }, [router]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setSelectedImage(event.target.result.toString());
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-2xl mx-auto min-h-screen p-4">
            <div className="p-8 bg-neutral-700 rounded-2xl mt-6 mb-20">
                {/* Cabeçalho */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-xl font-bold">Foto de perfil</h1>
                    <button
                        onClick={() => router.back()}
                        className="text-blue-600 font-medium"
                    >
                        Voltar
                    </button>
                </div>

                {/* Foto atual */}
                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-gray-200">
                        {selectedImage ? (
                            <Image
                                src={selectedImage}
                                alt="Nova foto do perfil"
                                width={192}
                                height={192}
                                className="object-cover w-full h-full"
                                unoptimized
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">Sem foto</span>
                            </div>
                        )}
                    </div>

                    {/* Opções */}
                    <div className="space-y-4 w-full max-w-xs">
                        <label className="block p-4 border border-gray-300 rounded-lg text-center font-medium cursor-pointer hover:bg-gray-50">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            Galeria
                        </label>

                        <button
                            onClick={() => setSelectedImage(null)}
                            className="w-full p-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
                        >
                            Remover
                        </button>
                    </div>
                </div>
            </div>

            <Navegacao ativo="perfil"/>
        </div>
    );
};

export default EditarFotoPerfil;