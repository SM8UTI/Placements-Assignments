// const removeAllOccurence = (num, target) => {
//   num = num.filter((c) => num[c] !== target);
//   return num.length;
// };

const removeAllOccurence = (n, t) => {
  let k = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== t) {
      n[k] = n[i];
      k++;
    }
  }
  return k;
};

const nums = [3, 2, 2, 3];
const val = 3;

console.log(removeAllOccurence(nums, val));
