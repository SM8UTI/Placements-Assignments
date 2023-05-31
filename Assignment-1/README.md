## Assignment Questions 1

<br>

### Questions - 1

---

💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

#### Ans :

```javascript
const equalNum = (n, t) => {
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] + n[j] === t) {
        return [i, j];
      }
    }
  }

  return [];
};
```

<br>

### Question-2

---

💡 **Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

**Example :**
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_*,_*]

**Explanation:** Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)

#### Ans :

```javascript
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
```

<br>

### Question-3

---

💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

#### Ans :

```javascript
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
```
