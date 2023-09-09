import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

import config from '../../config';

import styles from './styles.module.sass';

const Ghost = observer(() => {

  const imageWrapper = useRef<HTMLDivElement | null>(null);
  const { guildStore } = useStore();
  const { incrementGhostCount, ghostHidden, ghostCount, setMysterySolved } = guildStore;
  const [isVisible, setVisible] = useState(!ghostHidden);

  const getGhostRandomPosition = useCallback(() => {
    let position = 500;
    while (position >= 45 && position <= 790) {
      position = Math.floor(Math.random() * (window.innerWidth - 600));
    }
    return position + 'px';
  }, []);

  const setRandomPositionToGhost = useCallback(() => {
    if (imageWrapper.current && typeof window !== undefined) {
      imageWrapper.current.style.right = getGhostRandomPosition();
    }
  }, [getGhostRandomPosition]);

  useEffect(() => {
    setRandomPositionToGhost();
  }, [setRandomPositionToGhost]);

  useEffect(() => {
    if (isVisible || ghostHidden) return;
    const interval = setInterval(() => {
      const hasToShow = Math.random() > 0.6;
      if (hasToShow) {
        setVisible(hasToShow);
        clearInterval(interval);
      }
    }, 3000);
  }, [isVisible, ghostHidden]);

  const handleClick = () => {
    if (!isVisible) return;
    incrementGhostCount();
    setVisible(false);
    setTimeout(() => {
      setRandomPositionToGhost();
    }, 2000);
  };

  useEffect(() => {
    if (ghostCount < 1) return;
    setMysterySolved();
  }, [ghostCount, setMysterySolved]);

  if (ghostHidden) return null;
  const ghostClassName = `${styles.ghost} ${!isVisible ? styles['--hidden'] : ''}`;

  return (
    <div
      onClick={handleClick}
      className={ghostClassName}
      ref={imageWrapper}
    >
      <Image
        src={config.ghost}
        alt="ghost!"
        width={500}
        height={720}
        className={styles.ghostImage}
      />
    </div>
  );
});

export default Ghost;
