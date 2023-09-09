import {
  types,
  getParent
} from 'mobx-state-tree';

import { IStore } from '@/store/interface';

const MainPageStore = types
  .model('MainPageStore', {
    currentState: types.enumeration(['MAIN', 'MAP']),
    mysteryReached: false,
    pageVisible: true,
  }
  )
  .actions(self =>({
    setNewState(state: 'MAIN' | 'MAP') {
      self.currentState = state;
    },
    handleChangeViewState() {
      self.currentState = self.currentState === 'MAIN' ? 'MAP' : 'MAIN';
    },
    changePageVisibleState() {
      self.pageVisible = !self.pageVisible;
    },
    setMysterySolved() {
      self.mysteryReached = true;
      const store = getParent(self) as IStore;
      store.sidebarStore.setAchievementReached('0002');
      localStorage.setItem('mysteryText', 'true');
    },
  }));

export { MainPageStore };
