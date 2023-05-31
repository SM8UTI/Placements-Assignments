const findElement = (num, key) => {
  let s = 0;
  let e = num.length - 1;

  while (s <= e) {
    let m = Math.floor((s + e) / 2);
    if (num[m] == key) {
      return m;
    }
    if (num[m] <= key) {
      s = m + 1;
    } else {
      e = m - 1;
    }
  }

  return [];
};

nums = [1, 3, 5, 6];
target = 6;

console.log(findElement(nums, target));
