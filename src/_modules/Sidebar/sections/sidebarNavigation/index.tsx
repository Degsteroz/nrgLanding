import React from 'react';
import { navLinks } from '@/config/config';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

import styles from './styles.module.sass';

const SidebarNavigation = observer(() => {
  const router = useRouter();
  const {
    sidebarStore: {
      addVisitedRoutes,
      visitedRoutes,
      setOpenState,
    }
  } = useStore();

  const links = navLinks
    .map(({ url, id, title }) => {
      const onClick = () => {
        if (url === router.pathname) return setOpenState(false);

        addVisitedRoutes(url);
        setTimeout(() => {
          router.push(url).then(() => {});
        }, 1000);
      };
      const isVisited = visitedRoutes.includes(url);
      const linkCLassName = `${styles.crossLine} ${
        isVisited ? styles['--visited'] : ''
      }`;

      return (
        <div
          key={id}
          onClick={onClick}
          className={styles.sidebarLink}
        >
          {title}
          <div className={linkCLassName} />
        </div>
      );
    });
  return (
    <div>
      <span>НАВИГАЦИЯ</span>
      <div>
        {links}
      </div>
    </div>
  );
});

export default SidebarNavigation;
