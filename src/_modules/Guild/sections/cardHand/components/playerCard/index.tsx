import React from 'react';
import Image from 'next/image';

import styles from './styles.module.sass';
import config from '../../config';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import PlayerInfoBlock from '@/_modules/Guild/sections/cardHand/components/playerInfoBlock';

const PlayerCard = observer((
  { playerId }: { playerId: string },
) => {
  const { guildStore } = useStore();
  const { activePlayerId } = guildStore;
  const player = config.find(item => item.id === playerId);

  const isActive = playerId === activePlayerId;

  const handleClick = () => {
    if (activePlayerId && activePlayerId !== playerId) return;
    guildStore.setActivePlayerId(activePlayerId === playerId ? null : playerId);
  };

  if (!player) return null;
  const playerCardClassName = `${styles.playerCard} ` +
    `${styles['--preview']} ` +
    `${isActive && styles['--opened']} ` +
    `${!!activePlayerId && styles['--blurred']}`;
  const cardContainerClassName = `${styles.playerCardContainer} ` +
    `${isActive && styles['--opened']}`;

  return (
    <>
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

      <PlayerInfoBlock
        player={player}
        handleClick={handleClick}
        active={isActive}
      />
    </>
  );
});

export default PlayerCard;
