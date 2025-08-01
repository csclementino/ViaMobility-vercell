import { Suspense } from 'react';
import OrigemContent from './OrigemClient';

export default function OrigemPage() {
  return (
    <Suspense fallback={<div className="text-white text-center pt-20">Carregando...</div>}>
      <OrigemContent />
    </Suspense>
  );
}
