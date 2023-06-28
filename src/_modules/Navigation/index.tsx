import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';

import { getLinks } from '@/_modules/Navigation/config';

import styles from './styles/styles.module.sass';

function Navigation ({
  path,
}: { path?: string }) {
  const [visible, setVisible] = useState(true);
  const lastScrollPosition = useRef(0);
  const navigationComponent = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollHandler = () => {
      const currentScrollPosition = window?.scrollY
        || document.documentElement.scrollTop;

      if (lastScrollPosition.current < currentScrollPosition) {
        lastScrollPosition.current = currentScrollPosition;
        navigationComponent.current?.classList.add(styles['--semiVisible']);
        if (visible) return;

        setVisible(true);
      } else {
        lastScrollPosition.current = currentScrollPosition;
        navigationComponent.current?.classList.remove(styles['--semiVisible']);

        if(!currentScrollPosition) setVisible(true);
        if (!visible) return;
        setVisible(false);
      }
    };

    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, [visible]);
  const fields = getLinks(path || '') || [];

  const linksComponentArray = fields.map(link => (
    <Link
      href={link.path}
      key={link.id}
      className={styles.navigationLink}
    >
      {link.name}
      <div className={styles.linkUnderline} />
    </Link>
  ));

  const navigationClassName = `${styles.navigationContainer} ${visible ? styles['--visible'] : ''}`;

  return (
    <nav
      className={navigationClassName}
      ref={navigationComponent}
    >
      {linksComponentArray}
    </nav>
  );
}

export default Navigation;
