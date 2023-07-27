import React from 'react';

import config from './config';
import styles from './styles.module.sass';

export default function NavigationLinks () {
  const linksArray = config.links.map((link, index) => {
    const linkClassname = `${styles.navigationLink} ` +
      `${index % 2 === 0 ? styles['--left'] :styles['--right'] }`;
    return (
      <div
        key={link.value + '_' + index}
        className={linkClassname}
      >
        {link.title}
      </div>
    );
  });

  return (
    <div className={styles.navigationLinksContainer}>
      {linksArray}
    </div>
  );
}
