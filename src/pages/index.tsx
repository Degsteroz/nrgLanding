import React, { useState } from 'react';
import styles from './page.module.sass';

import Background from './main/_sections/background';
import Navigation from './main/_sections/navigation';

const MAIN = 'MAIN';
const MAP = 'MAP';

type ViewType = 'MAIN' | 'MAP'

export default function Home() {
  const [view, setView] = useState<ViewType>(MAIN);

  const changeView = () => {
    setView(prev => prev === MAP ? MAIN : MAP);
  };

  return (
    <main className={styles.main}>
      <Background
        unfocused={view !== MAIN}
      />
      <Navigation
        unfocused={view !== MAP}
        handleChangeView={changeView}
      />
    </main>
  );
}
