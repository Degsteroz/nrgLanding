import { types } from 'mobx-state-tree';

const Achievement = types
  .model('Sidebar', {
    id: types.maybeNull(types.string),
    image: types.string,
    title: types.string,
    description: types.string,
    reached: types.boolean,
  })
  .actions((self) => ({
    setReached() {
      self.reached = true;
    },
  }));

const SidebarStore = types
  .model('SidebarStore', {
    isOpen: false,
    withInteraction: false,
    achievements: types.array(Achievement),
    visitedRoutes: types.array(types.string)
  })
  .actions((self) => ({
    setAchievementReached(id: string) {
      const currentAchievement = self.achievements.find(element => element.id === id);

      if (!currentAchievement) return;

      currentAchievement.setReached();
    },
    setOpenState(value: boolean) {
      self.isOpen = value;
    },
    switchInteraction() {
      if (!self.withInteraction) self.withInteraction = true;
    },
    addVisitedRoutes(route: string) {
      setTimeout(() => {
        self.isOpen = false;
      }, 700);

      if (self.visitedRoutes.includes(route)) return;
      self.visitedRoutes.push(route);
    }
  }))
  .views(self => ({
    reachedAchievements() {
      return self.achievements.filter(item => item.reached);
    }
  }));

export default SidebarStore;
