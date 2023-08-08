import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';

import config from '../../../../config';
import styles from './styles.module.sass';

export default function Ghost() {
  const [isVisible, setVisible] = useState(true);
  const imageWrapper = useRef<HTMLDivElement | null>(null);

  const getGhostRandomPosition = () => {
    let position = 500;
    while (position >= 45 && position <= 790) {
      position = Math.floor(Math.random() * (window.innerWidth - 600));
    }
    return position + 'px';
  };

  const setRandomPositionToGhost = () => {
    if (imageWrapper.current && typeof window !== undefined) {
      imageWrapper.current.style.right = getGhostRandomPosition();
    }
  };

  useEffect(() => {
    setRandomPositionToGhost();
  }, []);

  useEffect(() => {
    if (isVisible) return;
    const interval = setInterval(() => {
      const hasToShow = Math.random() > 0.6;
      if (hasToShow) {
        setVisible(hasToShow);
        clearInterval(interval);
      }
    }, 3000);
  }, [isVisible]);

  const handleClick = () => {
    setVisible(false);
    setTimeout(() => {
      setRandomPositionToGhost();
    }, 2000);

  };
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
}
