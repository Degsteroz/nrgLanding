import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import headerConfig from './config';

import styles from './styles.module.sass';

interface IBackground {
  unfocused: boolean
}
export default function Background({
  unfocused,
}: IBackground) {
  const backgroundComponentClassName = `${styles.backgroundComponent} 
    ${unfocused ? styles['--unfocused'] : ''}`;

  const contentComponentClassName = `${styles.contentComponent} 
    ${unfocused ? styles['--unfocused'] : ''}`;

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    let gradientPosition = 30;
    const gradientChangeInterval = setInterval(() => {
      if (!contentRef.current) return;

      contentRef.current.style.background = `linear-gradient(0deg, rgba(113,4,4,1) 0%, rgba(17,10,53,1) ${gradientPosition}%)`;
      gradientPosition += 0.3;

      if (gradientPosition > 120) {
        clearInterval(gradientChangeInterval);
      }
    }, 100);
  }, [contentRef]);

  return (
    <div className={backgroundComponentClassName}>
      <div className={contentComponentClassName} ref={contentRef}>
        <div className={styles.lightningBG} />

        <Image
          src={headerConfig.forest}
          alt="mountains layer"
          className={styles.forestImage}
          width={1000}
          height={1000}
        />

        <div className={styles.contentWrapper}>
          <Image
            src={headerConfig.logoImageSrc}
            className={styles.logoImage}
            height={1000}
            width={1200}
            alt="logo image"
          />
        </div>

        <Image
          src={headerConfig.mansion}
          className={styles.mansionImage}
          alt="castle layer"
          width={1000}
          height={1000}
        />

        <div className={styles.rain}/>
      </div>
    </div>
  );
}
