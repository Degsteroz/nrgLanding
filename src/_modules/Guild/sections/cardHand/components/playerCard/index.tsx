import React from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

import { IPlayer } from '@/_modules/Guild/sections/cardHand/interfaces';

import styles from './styles.module.sass';

const PlayerCard = observer(({
  player,
}: { player: IPlayer},
) => {
  const { guildStore } = useStore();
  const { activePlayerId } = guildStore;
  const { id: playerId } = player;

  const isActive = playerId === activePlayerId;

  const handleClick = () => {
    if (activePlayerId && activePlayerId !== playerId) return;
    const currentId = activePlayerId === playerId
      ? null
      : playerId;

    guildStore.setActivePlayerId(currentId);
  };

  if (!player) return null;
  const playerCardClassName = `${styles.playerCard} ` +
    `${styles['--preview']} ` +
    `${isActive && styles['--opened']} ` +
    `${!!activePlayerId && styles['--blurred']}`;
  const cardContainerClassName = `${styles.playerCardContainer} ` +
    `${isActive && styles['--opened']}`;

  return (
    <div
      className={cardContainerClassName}
      onClick={() => handleClick()}
    >
      <Image
        src={player.photo}
        alt={player.name}
        width={200}
        height={400}
        className={playerCardClassName}
      />
    </div>
  );
});

export default PlayerCard;
