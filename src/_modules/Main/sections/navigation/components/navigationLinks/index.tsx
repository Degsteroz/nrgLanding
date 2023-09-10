import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import config from './config';
import styles from './styles.module.sass';

interface INavigationLinks {
  handleLinkClick: (_url: string) => void
}

const NavigationLinks = observer(({ handleLinkClick }: INavigationLinks) => {
  const router = useRouter();
  const linksArray = config.links
    .filter(link => router.pathname !== link.url)
    .map((link) => {
      const handleClick = () => {
        handleLinkClick(link.url);
      };

      return (
        <div
          key={link.id}
          className={styles.navigationLink}
          onClick={handleClick}
        >
          {link.title}
        </div>
      );
    });

  return (
    <div className={styles.linksContainer}>
      {linksArray}
    </div>
  );
});

export default NavigationLinks;
