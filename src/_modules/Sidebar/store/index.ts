import {
  types,
} from 'mobx-state-tree';

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
    achievements: types.array(Achievement)
  })
  .actions((self) => ({
    setAchievementReached(id: string) {
      const currentAchievement = self.achievements.find(element => element.id === id);

      if (!currentAchievement) return;

      currentAchievement.setReached();
    },
    setOpenState(value: boolean) {
      self.isOpen = value;
    }
  }))
  .views((self) => ({
    isActive() {
      return self.achievements.some(element => element.reached);
    }
  }));

export default SidebarStore;
