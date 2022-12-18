## [3sum](https://leetcode.com/problems/3sum/)

<br />

### 관련 이론

- sort
- two point

<br />

<details>
<summary>풀이</summary>
<p>

- [3sum](https://github.com/imzeze/Algorithm/blob/main/leetcode/3sum.md) 알고리즘과 동일한 알고리즘
- `temp` 초기값을 임의의 3값을 더한 값으로 주어 `sum`과 비교한다.

```js
const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);

  let temp = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) return sum;
      if (Math.abs(sum - target) < Math.abs(temp - target)) temp = sum;

      if (sum > target) right--;
      else left++;
    }
  }

  return temp;
};
```

</p>
</details>
