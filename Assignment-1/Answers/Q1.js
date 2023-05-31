const equalNum = (n, t) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === target) {
      return [i];
    }
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] + n[j] === t) {
        return [i, j];
      }
    }
  }

  return [];
};

const nums = [2, 8, 9, 1, 11, 15];
const target = 9;

console.log(equalNum(nums, target));
