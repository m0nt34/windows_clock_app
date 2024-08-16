import { times } from "../data/focusSessionTimes";

export const calculateBreaks = (session, check) => {
  const { focus, breaks } = session;

  if (focus < 5 || check) {
    return {
      focusAr: [times[focus]],
      breakAr: [],
    };
  } else {
    const breaksTime = times[breaks];
    const focusTime = times[focus];

    const breakPercentage =
      breaksTime <= 5 ? 0.2 : breaksTime <= 10 ? 0.25 : 0.3;

    const totalBreaksTime = Math.floor(focusTime * breakPercentage);
    const numBreaks = Math.floor(totalBreaksTime / breaksTime);

    const totalActualBreakTime = numBreaks * breaksTime;
    const totalFocusTime = focusTime - totalActualBreakTime;

    const focusPeriods = Math.floor(totalFocusTime / (numBreaks + 1));

    const remainingTime = totalFocusTime % (numBreaks + 1);

    const focusArray = Array(numBreaks + 1).fill(focusPeriods);
    
    for (let i = 0; i < remainingTime; i++) {
      focusArray[i%focusArray.length] += 1
    }
    const breakArray = Array(numBreaks).fill(breaksTime);

    return {
      focusAr: focusArray,
      breakAr: breakArray,
    };
  }
};
