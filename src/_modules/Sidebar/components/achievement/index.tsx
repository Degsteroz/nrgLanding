import React from 'react';
import Image from 'next/image';

import IAchievement from '../../interfaces';

import styles from './styles.module.sass';

interface IAchievementProps {
  achievement: IAchievement
}

export default function Achievement({ achievement } : IAchievementProps) {
  const { id, title, reached, description, image } = achievement;

  if (!reached) {
    return (
      <div className={styles.emptyComponent}>
        {id}
      </div>
    );
  }

  const reachedClassName = `${styles.achievementComponent} ${styles['--reached']}`;

  return (
    <div className={reachedClassName}>
      <div className={styles.topBlock}/>
      <section className={styles.contentBlock}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className={styles.image}
        />
        <div className={styles.textWrapper}>
          <div className={styles.text__title}>
            {title}
          </div>
          <div className={styles.text__description}>
            {description}
          </div>
        </div>
      </section>

    </div>
  );
}
