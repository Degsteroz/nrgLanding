import React, { MouseEvent } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import { useStore } from '@/store';

import NavigationLinks from './components/navigationLinks';
import MysteryText from './components/mysteryText';

import config from './config';
import styles from './styles.module.sass';

interface INavigation {
  unfocused: boolean
}

const Navigation = observer(({
  unfocused,
}: INavigation) => {
  const router = useRouter();

  const {
    mainPageStore: {
      changePageVisibleState,
      setNewState
    },
  } = useStore();

  const handleLinkClick = (url: string) => {
    if (unfocused) return;

    changePageVisibleState();

    setTimeout(() => {
      router.push(url).then(() => {});
      changePageVisibleState();
    }, 3500);
  };

  const wrapperClassName = `${styles.navigationContentWrapper} `
    + `${unfocused ? '' : styles['--focused']}`;
  const navigationClassName = `${styles.navigationLinkContainer} `
    + `${unfocused ? '' : styles['--visible']}`;

  const handleClickBook = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (!unfocused) return;
    setNewState('MAP');
  };

  const handleClickBackground = () => {
    if (unfocused) return;
    setNewState('MAIN');
  };

  return (
    <div
      className={styles.navigationContainer}
      onClick={handleClickBackground}
    >
      <div className={navigationClassName}>
        <NavigationLinks handleLinkClick={handleLinkClick} />
      </div>

      <div className={wrapperClassName} onClick={handleClickBook}>
        <Image
          src={config.backgroundImage}
          className={styles.navigationContainerImage}
          height={550}
          width={550}
          alt="navigation"
        />

        <MysteryText />
      </div>
    </div>
  );
});

export default Navigation;
