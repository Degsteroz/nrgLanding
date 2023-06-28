import React, { MouseEvent } from 'react';
import Image from 'next/image';

import config from './config';
import styles from './styles.module.sass';

interface INavigation {
  unfocused: boolean
  handleChangeView: () => void
}

export default function Navigation({
  unfocused,
  handleChangeView,
}: INavigation) {
  const imageClassName = `${styles.navigationComponentImage} `
    + `${unfocused ? '' : styles['--focused']}`;
  const handleClickBook = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (!unfocused) return;
    handleChangeView();
  };

  const handleClickBackground = () => {
    if (unfocused) return;
    handleChangeView();
  };

  return (
    <div className={styles.navigationContainer} onClick={handleClickBackground}>
      <Image
        src={config.backgroundImage}
        className={imageClassName}
        onClick={handleClickBook}
        height={550}
        width={550}
        alt="navigation"
      />
    </div>
  );
};
