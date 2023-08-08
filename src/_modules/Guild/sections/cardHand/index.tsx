import React from 'react';

import { IPlayer } from './interfaces';

import PlayerCard from './components/playerCard';
import PlayerInfoBlock from './components/playerInfoBlock';

import players from './config';

import styles from './styles.module.sass';
const CardHand = () => {
  const elements = players.map((player: IPlayer) => {
    const { id } = player;
    return (
      <PlayerCard
        key={id}
        player={player}
      />
    );
  });

  return (
    <div className={styles.cardHandComponent}>
      <div className={styles.cardsHand}>
        {elements}
      </div>

      <PlayerInfoBlock />
    </div>
  );
};

export default CardHand;
