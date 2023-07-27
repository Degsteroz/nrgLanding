import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import config from '../../../config';
import Image from 'next/image';
import styles from'./styles.module.sass';

export default function Ghost() {
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    if (isVisible) return;
    const interval = setInterval(() => {
      const hasToShow = Math.random() > 0.6;
      if (hasToShow) {
        if (imageWrapper.current && typeof window !== undefined) {
          setVisible(prev => !prev);
          imageWrapper.current.style.right = '-500px';
        }
        setVisible(hasToShow);
        clearInterval(interval);
      }
    }, 5000);
  }, [isVisible]);
  const imageWrapper = useRef<HTMLDivElement | null>(null);
  const handleClick = (e: MouseEvent<HTMLImageElement>) => {
    const { clientX } = e;
    if (imageWrapper.current && typeof window !== undefined) {
      imageWrapper.current.style.right = (window.innerWidth - clientX) + 'px';
      setVisible(prev => !prev);
    }
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
