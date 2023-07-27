import React, { CSSProperties, useEffect, useState } from 'react';

import styles from './styles.module.sass';
import config from '../../config';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import Image from 'next/image';

const PlayerCard = observer((
  {
    playerId,
    style,
  }: {
    playerId: string
    style?: CSSProperties
  }
) => {
  const { guildStore } = useStore();
  const { activePlayerId } = guildStore;
  const [isFullVisible, setFullVisible] = useState(false);
  const player = config.find(item => item.id === playerId);

  const isActive = playerId === activePlayerId;

  const handleClick = () => {
    if (activePlayerId && activePlayerId !== playerId) return;
    guildStore.setActivePlayerId(activePlayerId === playerId ? null : playerId);
  };

  useEffect(() => {
    if(!isActive) return;
    const timer = setTimeout(() => {
      setFullVisible(isActive);
    }, 700);

    return () => clearTimeout(timer);
  }, [isActive]);

  const handleClickOnFullCard = () => {
    setFullVisible(false);

    setTimeout(() => {
      handleClick();
    }, 500);
  };

  if (!player) return null;
  const playerCardClassName = `${styles.playerCard} ` +
    `${isActive && styles['--opened']} ` +
    `${!!activePlayerId && styles['--blurred']}`;
  const cardContainerClassName = `${styles.playerCardContainer} ${isActive && styles['--opened']}`;
  const fullCardClassName = `${styles.fullCard} ${isFullVisible && styles['--visible']}`;

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
          style={style || {}}
        />
      </div>
      <div
        className={fullCardClassName}
        onClick={handleClickOnFullCard}
      >
        {player.description}
      </div>
    </>
  );
});

export default PlayerCard;
