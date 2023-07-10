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
