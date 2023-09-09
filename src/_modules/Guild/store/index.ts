import {
  types,
  getParent,
} from 'mobx-state-tree';
import { IStore } from '@/store/interface';

const GuildStore = types
  .model('GuildStore', {
    activePlayerId: types.maybeNull(types.string),
    ghostCount: 0,
    ghostHidden: false
  })
  .actions(self =>({
    setActivePlayerId(id: string | null) {
      self.activePlayerId = id;
    },
    incrementGhostCount() {
      self.ghostCount += 1;
    },
    setMysterySolved() {
      const store = getParent(self) as IStore;
      store.sidebarStore.setAchievementReached('0001');
      localStorage.setItem('ghostBuster', 'true');

      setTimeout(() => {
        self.ghostHidden = true;
      }, 2000);
    }
  }));

export { GuildStore };

