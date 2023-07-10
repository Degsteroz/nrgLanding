import React, { MouseEvent } from 'react';
import Image from 'next/image';

import config from './config';
import styles from './styles.module.sass';

interface INavigation {
  unfocused: boolean
  handleChangeView: () => void
  handleChangePage: () => void
}

export default function Navigation({
  unfocused,
  handleChangeView,
  handleChangePage,
}: INavigation) {
  const wrapperClassName = `${styles.navigationContentWrapper} `
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

  const changePage = (e: MouseEvent<HTMLImageElement>) => {
    if (unfocused) return handleClickBook(e);
    handleChangePage();
  };

  return (
    <div className={styles.navigationContainer} onClick={handleClickBackground}>
      <div className={wrapperClassName}>
        <Image
          src={config.backgroundImage}
          className={styles.navigationContainerImage}
          onClick={handleClickBook}
          height={550}
          width={550}
          alt="navigation"
        />

        <div
          className={styles.navigationLinkContainer}
          onClick={changePage}
        >
          <Image
            src={config.logoImage}
            className={styles.navigationLinkImage}
            height={250}
            width={250}
            alt="navigation"
          />
          <div>ВОЙТИ</div>
        </div>
      </div>

    </div>
  );
};
