import React from 'react';
import Image from 'next/image';

import styles from './styles.module.sass';
import headerConfig from './config';

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

  return (
    <div className={backgroundComponentClassName}>
      <div className={contentComponentClassName}>
        <Image
          src={headerConfig.forest}
          alt="mountains layer"
          className={styles.mountainImage}
          fill
        />

        <Image
          src={headerConfig.mansion}
          className={styles.castleImage}
          alt="castle layer"
          fill
        />

        <div className={styles.contentWrapper}>
          <Image
            src={headerConfig.logoImageSrc}
            className={styles.logoImage}
            height={300}
            width={350}
            alt="logo image"
          />
        </div>
      </div>
    </div>
  );
}
