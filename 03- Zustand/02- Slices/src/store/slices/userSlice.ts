import { StateCreator } from "zustand";

export interface UserSlice {
  username: string;
  setUsername: (username: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  username: "",
  setUsername: (username: string) => set({ username }),
});
