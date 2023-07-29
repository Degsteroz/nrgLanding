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
  const getGhostRandomPosition = () => {
    let position = 500;
    while (position >= 45 && position <= 750) {
      position = Math.floor(Math.random() * (window.innerWidth - 600));
    }
    return position + 'px';
  };

  useEffect(() => {
    if (imageWrapper.current && typeof window !== undefined) {
      imageWrapper.current.style.right = getGhostRandomPosition();
    }
  }, []);

  useEffect(() => {
    if (isVisible) return;
    const interval = setInterval(() => {
      const hasToShow = Math.random() > 0.6;
      if (hasToShow) {
        setVisible(hasToShow);
        clearInterval(interval);
      }
    }, 5000);
  }, [isVisible]);

  const imageWrapper = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setVisible(false);
    setTimeout(() => {
      if (imageWrapper.current && typeof window !== undefined) {
        imageWrapper.current.style.right = getGhostRandomPosition();
      }
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
