import React from 'react';
import styles from './styles/index.module.sass';

import config from '@/_modules/Guild/config';
import Image from 'next/image';
import Ghost from '@/_modules/Guild/sections/guildBackground/components/ghoust';

export default function GuildBackground({
  unfocused
} : {
  unfocused: boolean
}) {
  const backClassName = `${styles.guildBackgroundContainer} ${unfocused && styles['--unfocused']}`;
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
}
