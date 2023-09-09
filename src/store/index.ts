import {
  IAnyStateTreeNode,
  types,
  unprotect,
  onSnapshot,
} from 'mobx-state-tree';

import { GuildStore } from '@/_modules/Guild/store';
import SidebarStore from '@/_modules/Sidebar/store';
import { achievements } from '@/config/config';
import { MainPageStore } from '@/_modules/Main/store';

export const Store = types.model('GlobalStore', {
  guildStore: GuildStore,
  sidebarStore: SidebarStore,
  mainPageStore: MainPageStore,
});

let store: IAnyStateTreeNode;
export const useStore = () => {
  const _store = store ?? Store.create({
    guildStore: GuildStore.create(),
    sidebarStore: SidebarStore.create({
      achievements: achievements,
    }),
    mainPageStore: MainPageStore.create({
      currentState: 'MAIN'
    })
  });

  unprotect(_store);
  onSnapshot(_store, (storage) => {
    localStorage.setItem('store', JSON.stringify(storage));
  });

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return store;
};

