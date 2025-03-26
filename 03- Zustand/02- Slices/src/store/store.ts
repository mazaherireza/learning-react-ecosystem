import { create } from "zustand";
import { UserSlice, createUserSlice } from "./slices/userSlice";
import { CounterSlice, createCounterSlice } from "./slices/counterSlice";

type StoreState = UserSlice & CounterSlice;

const useStore = create<StoreState>((state, set, get) => ({
  ...createUserSlice(state, set, get),
  ...createCounterSlice(state, set, get),
}));

export default useStore;
