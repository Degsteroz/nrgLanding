import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import styles from './styles/index.module.sass';

import config from '@/_modules/Guild/config';
import Image from 'next/image';
import Ghost from '@/_modules/Guild/sections/guildBackground/components/ghoust';

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
