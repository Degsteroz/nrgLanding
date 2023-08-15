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
      if (self.ghostCount !== 2) return;
      self.ghostHidden = true;
      const store = getParent(self) as IStore;
      store.sidebarStore.setAchievementReached('001');
    }
  }));

export { GuildStore };

