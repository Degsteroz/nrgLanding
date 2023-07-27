import { createContext } from 'react';
import { Store } from '@/store';
import { Instance } from 'mobx-state-tree';

type RootStoreModel = Instance<typeof Store>

const StoreContext = createContext<RootStoreModel>({} as RootStoreModel);
export const StoreProvider = StoreContext.Provider;
