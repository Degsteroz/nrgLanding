import {
  IAnyStateTreeNode,
  types,
  unprotect,
} from 'mobx-state-tree';

import { GuildStore } from '@/_modules/Guild/store';
import SidebarStore from '@/_modules/Sidebar/store';
import { achievements } from '@/config/config';

export const Store = types.model('GlobalStore', {
  guildStore: GuildStore,
  sidebarStore: SidebarStore
});

let store: IAnyStateTreeNode;
export const useStore = () => {
  const _store = store ?? Store.create({
    guildStore: GuildStore.create(),
    sidebarStore: SidebarStore.create({
      achievements: achievements,
    })
  });
  unprotect(_store);

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return store;
};
