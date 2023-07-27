import React from 'react';

import players from './config';
import { IPlayer } from './interfaces';
import PlayerCard from './components/playerCard';

import styles from './styles.module.sass';

const CardHand = () => {

  const elements = players.map((player: IPlayer, index) => {
    const { id } = player;
    return (
      <PlayerCard
        key={id + index}
        playerId={id}
      />
    );
  });

  return (
    <div className={styles.cardHandComponent}>
      <div className={styles.cardsHand}>
        {elements}
      </div>

    </div>
  );
};

export default CardHand;
