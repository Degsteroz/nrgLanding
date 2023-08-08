import React, {
  MouseEvent,
  useEffect,
  useState,
  useRef,
} from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

import players from '../../config';

import styles from './styles.module.sass';

const PlayerInfoBlock = observer(()  => {
  const [visible, setVisible] = useState(false);

  const container = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);

  const { guildStore } = useStore();

  const { activePlayerId } = guildStore;
  const isActive = !!activePlayerId;

  useEffect(() => {
    if(!isActive) return setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 700);

    function handleClickOutside(event: Event) {
      const isOutsideClick = !container.current?.contains(
        event.target as HTMLElement
      );

      if (isOutsideClick) {
        setVisible(false);

        setTimeout(() => {
          guildStore.setActivePlayerId(null);
        }, 500);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive, guildStore]);

  useEffect(() => {
    content.current?.classList.remove(styles['--hide']);
  }, [activePlayerId]);

  const playerIndex = players.findIndex(item => item.id === activePlayerId);
  const player = players[playerIndex];

  if (!player) return null;

  const switchCard = (id: string) => {
    if (content.current) {
      content.current.classList.add(styles['--hide']);
    }
    setTimeout(() => {
      guildStore.setActivePlayerId(id);
    }, 900);
  };

  const switchToPrevCard = () => {
    const nextCard = players[playerIndex - 1] || players[players.length - 1];

    switchCard(nextCard.id);
  };

  const switchToNextCard = () => {
    const nextCard = players[playerIndex + 1] || players[0];

    switchCard(nextCard.id);
  };

  const fullCardClassName = `${styles.fullCard} ` +
    `${visible && styles['--visible']}`;

  const descriptionMarkup = {
    __html: player.description
  };

  const handleLeftBlockClick = (e: MouseEvent<HTMLImageElement>) => {
    switchToPrevCard();
    e.stopPropagation();
  };

  const handleRightBlockClick = (e: MouseEvent<HTMLImageElement>) => {
    switchToNextCard();
    e.stopPropagation();
  };

  return (
    <div
      className={fullCardClassName}
      ref={container}
    >
      <div
        className={styles.fullCard__content}
        ref={content}
      >
        <div
          onClick={handleLeftBlockClick}
          className={styles.content__leftBlock}
        >
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
          onClick={handleRightBlockClick}
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
});

export default PlayerInfoBlock;
