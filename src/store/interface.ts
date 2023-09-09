import { IAnyStateTreeNode } from 'mobx-state-tree';

export interface IStore {
  guildStore: IAnyStateTreeNode
  sidebarStore: IAnyStateTreeNode
  mainPageStore: IAnyStateTreeNode

  saveStore: () => void
}
