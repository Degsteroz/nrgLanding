import React, {
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';

import { IPlayer } from '../../interfaces';
import styles from './styles.module.sass';

interface IPlayerInfoBlock {
  player: IPlayer
  handleClick: () => void
  active: boolean
}

export default function PlayerInfoBlock({
  player,
  handleClick,
  active
} : IPlayerInfoBlock) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(!active) return;
    const timer = setTimeout(() => {
      setVisible(active);
    }, 700);

    return () => clearTimeout(timer);
  }, [active]);

  if (!player) return null;

  const fullCardClassName = `${styles.fullCard} ` +
    `${visible && styles['--visible']}`;
  const handleClickOnFullCard = () => {
    setVisible(false);

    setTimeout(() => {
      handleClick();
    }, 500);
  };

  const descriptionMarkup = {
    __html: player.description
  };

  const preventRightBlockClick = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={fullCardClassName}
      onClick={handleClickOnFullCard}
    >
      <div className={styles.fullCard__content}>
        <div className={styles.content__leftBlock}>
          <div className={styles.leftBlock__imageContainer}>
            <Image
              src={player.photo}
              alt={player.name}
              width={300}
              height={550}
              className={styles.leftBlock__image}
            />
          </div>
          <span>
              Место для фотографии
          </span>
        </div>

        <div
          className={styles.content__rightBlock}
          onClick={preventRightBlockClick}
        >
          <div className={styles.rightBlock__title}>
            {player.name}
          </div>

          <div
            className={styles.rightBlock__description}
            dangerouslySetInnerHTML={descriptionMarkup}
          />
        </div>
      </div>
    </div>
  );
}
