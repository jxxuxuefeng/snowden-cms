import { create } from "zustand";

type GlobalStore = {
  token: string | null;
  setToken: (token: string) => void;
  userInfo: any;
  setUserInfo: (userInfo: any) => void;
};

export const useGlobalStore = create<GlobalStore>()((set) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  userInfo: null,
  setUserInfo: (userInfo: any) => set({ userInfo }),
}));
