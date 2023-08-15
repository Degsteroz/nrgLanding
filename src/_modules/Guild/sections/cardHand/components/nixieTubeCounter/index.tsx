import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

import styles from './styles.module.sass';

const NixieTubeCounter = observer(() => {
  const { guildStore: {
    ghostCount,
    ghostHidden,
  } } = useStore();
  const numbersComponentsArray = Array.from({ length: 5 },
    (_, index) => {
      const key = 'item_' + index;
      const numberClassName = `${styles.numberComponent} ${
        index === ghostCount
          ? styles['--active']
          : ''
      }`;

      return (
        <div
          key={key}
          className={numberClassName}
        >
          {index}
        </div>
      );
    });

  const containerClassName = `${styles.tubeContainer} ${ghostHidden ? styles['--hidden'] : ''}`;

  return (
    <div className={containerClassName}>
      <div className={styles.tubeComponent} />
      {numbersComponentsArray}
    </div>
  );
});

export default NixieTubeCounter;
