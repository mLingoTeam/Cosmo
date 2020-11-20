import { MutationTree } from "vuex";
import { CosmoState, User } from './cosmoState';

export enum MutationType{
    SetUserSettings = "SET_USER_SETTINGS",
}

export type Mutations ={
    [MutationType.SetUserSettings](state: CosmoState, user: User): void;
}

export const mutations: MutationTree<CosmoState> & Mutations = {
    [MutationType.SetUserSettings](state, user){
        state.User.userToken !== user.userToken ? state.User.userToken = user.userToken : null;
        state.User.username !== user.username ? state.User.username = user.username : null;
    }
}