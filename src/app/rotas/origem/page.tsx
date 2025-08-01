import { Suspense } from 'react';
import OrigemContent from './OrigemClient';
import OrigemLoading from './OrigemLoading'; 

export default function OrigemPage() {
  return (
    <Suspense fallback={<OrigemLoading/>}>
      <OrigemContent />
    </Suspense>
  );
}
