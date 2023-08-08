import React from 'react';

import GuildBackground from '@/_modules/Guild/sections/guildBackground';
import CardHand from '@/_modules/Guild/sections/cardHand';

import styles from './styles.module.sass';

export default function Guild () {

  return (
    <div className={styles.guildPage}>
      <GuildBackground />

      <div className={styles.handContainer}>
        <CardHand />
      </div>
    </div>
  );
};

