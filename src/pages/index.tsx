import React from 'react';
import { observer } from 'mobx-react-lite';

import styles from './page.module.sass';

import Background from '../_modules/Main/sections/background';
import Navigation from '../_modules/Main/sections/navigation';
import { useStore } from '@/store';

const MAIN = 'MAIN';
const MAP = 'MAP';

const Home = observer(() => {
  const {
    mainPageStore: {
      currentState,
      pageVisible,
    },
  } = useStore();

  const mainClassName = `${styles.main} ${!pageVisible ? styles['--hidden'] : ''}`;

  return (
    <main className={mainClassName}>
      <Background unfocused={currentState !== MAIN} />

      <Navigation unfocused={currentState !== MAP} />
    </main>
  );
});

export default Home;
