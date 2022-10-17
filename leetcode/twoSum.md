[Two Sum](https://leetcode.com/problems/two-sum/)

<details>
<summary>풀이(brute force)</summary>
<p>

```js
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
```

</p>
</details>
