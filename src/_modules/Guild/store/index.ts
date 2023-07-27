import {
  types,
} from 'mobx-state-tree';

const GuildStore = types
  .model('GuildStore', {
    activePlayerId: types.maybeNull(types.string)
  })
  .actions(self =>({
    setActivePlayerId(id: string | null) {
      self.activePlayerId = id;
    }
  }))

export { GuildStore };

