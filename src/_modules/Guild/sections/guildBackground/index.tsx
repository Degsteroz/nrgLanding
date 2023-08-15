import React from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { useStore } from '@/store';

import Ghost from './components/ghoust';

import config from './config';
import styles from './styles/index.module.sass';

const GuildBackground = observer(() => {
  const { guildStore } = useStore();

  const { activePlayerId } = guildStore;
  const backClassName = `${styles.guildBackgroundContainer} ${!!activePlayerId && styles['--unfocused']}`;
  return (
    <div className={backClassName}>
      <Image
        src={config.background}
        alt="background"
        width={1024}
        height={576}
        className={styles.backgroundImage}
      />
      <Ghost />
      <div className={styles.strangerContainer}>
        <Image
          src={config.stranger}
          alt="stranger"
          width={860}
          height={930}
          className={styles.strangerImage}
        />
      </div>
    </div>
  );
});

export default GuildBackground;
