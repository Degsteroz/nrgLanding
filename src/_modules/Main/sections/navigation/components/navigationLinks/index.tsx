import React from 'react';
import { observer } from 'mobx-react-lite';

import config from './config';
import styles from './styles.module.sass';

interface INavigationLinks {
  handleLinkClick: (_url: string) => void
}

const NavigationLinks = observer(({ handleLinkClick }: INavigationLinks) => {
  const linksArray = config.links.map((link) => {
    return (
      <div
        key={link.id}
        className={styles.navigationLink}
        onClick={() => handleLinkClick(link.url)}
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
