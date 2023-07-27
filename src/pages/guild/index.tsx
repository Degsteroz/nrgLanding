import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

import GuildBackground from '@/_modules/Guild/sections/guildBackground';
import CardHand from '@/_modules/Guild/sections/cardHand';

import styles from './styles.module.sass';

const Guild = observer(() => {
  const store = useStore();

  const { activePlayerId } = store.guildStore;

  return (
    <div className={styles.guildPage}>
      <GuildBackground unfocused={!!activePlayerId}/>
      <div className={styles.handContainer}>
        <CardHand />
      </div>
    </div>
  );
});

export default Guild;
