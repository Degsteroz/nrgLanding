import React from 'react';
import Image from 'next/image';

import achievement from '@/assets/achievement.svg';
import path from '@/assets/path.svg';

import styles from './styles.module.sass';

interface IBookmarks {
  setCurrentBookmark: (_bookmark: string) => void
  currentBookmark: string
}
export default function Bookmarks({
  currentBookmark,
  setCurrentBookmark,
}: IBookmarks) {
  const bookmarks = [
    {
      title: 'achievement',
      icon: achievement
    },
    {
      title: 'navigation',
      icon: path,
    }
  ];

  const bookmarksComponents = bookmarks.map(({ title, icon }) => {
    const bookmarkClassname = `${styles.bookmark} ${
      title === currentBookmark
        ? styles['--active']
        : ''
    }`;
    return (
      <div
        className={bookmarkClassname}
        key={title}
        onClick={() => setCurrentBookmark(title)}
      >
        <Image
          src={icon}
          alt={title}
          className={styles.bookmark__icon}
        />
      </div>
    );
  });

  return (
    <>
      {bookmarksComponents}
    </>
  );
}
