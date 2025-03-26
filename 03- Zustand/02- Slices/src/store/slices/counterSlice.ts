import { StateCreator } from "zustand";

export interface CounterSlice {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
});
