import {
  IAnyStateTreeNode,
  types,
  unprotect,
} from 'mobx-state-tree';

import { GuildStore } from '@/_modules/Guild/store';

export const Store = types.model('GlobalStore', {
  guildStore: GuildStore
});

let store: IAnyStateTreeNode;
export const useStore = () => {
  const _store = store ?? Store.create({
    guildStore: GuildStore.create()
  });
  unprotect(_store);

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return store;
};
