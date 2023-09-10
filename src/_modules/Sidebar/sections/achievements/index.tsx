import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

import Achievement from '@/_modules/Sidebar/components/achievement';
import IAchievement from '@/_modules/Sidebar/interfaces';

import styles from './styles.module.sass';

const Achievements = observer(() => {
  const [achievementsList, setAchievementsList] = useState<IAchievement[]>([]);
  const {
    sidebarStore: {
      achievements,
      reachedAchievements,
    }
  } = useStore();

  const { length } = reachedAchievements();

  useEffect(() => {
    setAchievementsList(achievements);
  }, [achievements, length]);

  const componentsArray = achievementsList.map((achievement: IAchievement) => (
    <Achievement
      achievement={achievement}
      key={achievement.id}
    />
  ));

  return (
    <div className={styles.achievementsBlock}>
      <span>ДОСТИЖЕНИЯ</span>
      {componentsArray}
    </div>
  );
});

export default Achievements;
