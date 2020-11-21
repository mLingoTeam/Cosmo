export type User = {
  username: string;
  userToken: boolean;
};

export interface CosmoState {
  User: User;
}

export const cosmoState: CosmoState = {
  User: {
    username: "Anonymous",
    userToken: true
  }
};
