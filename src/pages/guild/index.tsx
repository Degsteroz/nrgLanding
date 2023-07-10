import React from 'react';
import { useRouter } from 'next/router';

export default function Guild() {
  const router = useRouter();

  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      ТУТ ПОКА НЕГУСТО, НО МЫ В ПРОЦЕССЕ
      <button onClick={router.back}>
        BACK
      </button>
    </div>
  );
}
