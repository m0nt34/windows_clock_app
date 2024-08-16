export const mergeArrays = (arr1, arr2) => {
  let newArr = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      newArr.push(arr1[i]);
    }
    if (i < arr2.length) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
};