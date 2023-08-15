import React, { useState, MouseEvent } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

import Achievements from '@/_modules/Sidebar/sections/achievements';
import SidebarNavigation from '@/_modules/Sidebar/sections/sidebarNavigation';

import Bookmarks from '@/_modules/Sidebar/components/bookmarks';

import book from '@/assets/book.svg';

import styles from './styles.module.sass';

const Sidebar = observer(() => {
  const { sidebarStore } = useStore();
  const [
    currentBookmark,
    setCurrentBookmark,
  ] = useState<string>('achievement');

  const { isOpen, setOpenState } = sidebarStore;

  const getActiveClassName = (className: string) => (
    `${className} ${
      isOpen
        ? styles['--active']
        : ''
    }`
  );

  const contentWrapperClassName = getActiveClassName(styles.sidebar__contentWrapper);
  const sidebarBookSwitcherClassName = getActiveClassName(styles.sidebar__button);

  const handleClickOnSwitcher = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setOpenState(!isOpen);
  };

  const getContent = () => {
    if (currentBookmark === 'achievement') return <Achievements />;

    return <SidebarNavigation />;
  };

  const innerContent = getContent();

  return (
    <div className={styles.sidebarComponent}>
      <Image
        src={book}
        width={50}
        height={50}
        alt=''
        className={sidebarBookSwitcherClassName}
        onClick={handleClickOnSwitcher}
      />

      <div className={contentWrapperClassName}>
        <div className={styles.sidebarContent}>
          <div className={styles.innerContent}>
            <div className={styles.bookmarks}>
              <Bookmarks
                setCurrentBookmark={setCurrentBookmark}
                currentBookmark={currentBookmark}
              />
            </div>

            {innerContent}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Sidebar;
