import Vuex, {
  Store as VuexStore,
  CommitOptions,
} from 'vuex'
import {CosmoState, cosmoState} from './cosmoState';
import { Mutations, mutations } from './mutations';
import { Getters, getters } from './getters';



export const store = new Vuex.Store<CosmoState>({
  state: cosmoState,
  mutations,
  getters
})

export function useStore() {
  return store as Store;
}

export type Store = Omit<
  VuexStore<CosmoState>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}