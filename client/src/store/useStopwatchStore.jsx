import { create } from "zustand";

export const useStopwatchStore = create((set) => ({
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
  reset: false,
  incrementMilliseconds: () =>
    set((state) => {
      const newMilliseconds = state.milliseconds + 1;
      const shouldIncrementSeconds = newMilliseconds === 100;
      const newSeconds = shouldIncrementSeconds
        ? state.seconds + 1
        : state.seconds;
      const shouldIncrementMinutes = newSeconds === 60;
      const newMinutes = shouldIncrementMinutes
        ? state.minutes + 1
        : state.minutes;
      const shouldIncrementHours = newMinutes === 60;
      const newHours = shouldIncrementHours ? state.hours + 1 : state.hours;
      if (state.reset) {
        return {
          milliseconds: shouldIncrementSeconds ? 0 : newMilliseconds,
          seconds: shouldIncrementSeconds ? newSeconds % 60 : newSeconds,
          minutes: shouldIncrementMinutes ? newMinutes % 60 : newMinutes,
          hours: shouldIncrementHours ? newHours : state.hours,
        };
      } else {
        return {
          milliseconds: 0,
          seconds: 0,
          minutes: 0,
          hours: 0,
        };
      }
    }),
  setResetToTrue: () => set({ reset: true }),
  setResetToFalse: () => set({ reset: false }),
}));
