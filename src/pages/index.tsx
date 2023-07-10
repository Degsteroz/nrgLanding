import React, { useState } from 'react';
import styles from './page.module.sass';
import { useRouter } from 'next/router';

import Background from '../_modules/Main/_sections/background';
import Navigation from '../_modules/Main/_sections/navigation';

const MAIN = 'MAIN';
const MAP = 'MAP';

type ViewType = 'MAIN' | 'MAP'

export default function Home() {
  const [view, setView] = useState<ViewType>(MAIN);
  const [hidden, setHidden] = useState<Boolean>(false);

  const router = useRouter();

  const changeView = () => {
    setView(prev => prev === MAP ? MAIN : MAP);
  };
  const changePage = () => {
    setHidden(true);
    setTimeout(() => {
      router.push('/guild').then(() => {});
    }, 3500);
  };

  const mainClassName = `${styles.main} ${hidden ? styles['--hidden'] : ''}`;

  return (
    <main className={mainClassName}>
      <Background
        unfocused={view !== MAIN}
      />
      <Navigation
        unfocused={view !== MAP}
        handleChangeView={changeView}
        handleChangePage={changePage}
      />
    </main>
  );
}
