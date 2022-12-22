## [4sum](https://leetcode.com/problems/3sum/)

<br />

### 관련 이론

- sort
- two point

<br />

<details>
<summary>풀이</summary>
<p>

- [3sum](https://github.com/imzeze/Algorithm/blob/main/leetcode/3sum.md)와 동일한 접근 방법으로 해결한다.
- 가장 먼저 합의 비교를 위해 정렬을 한다.
- 첫번째 point와 left point를 고정으로 해두고, 총합(sum)과 target의 크기 비교에 따라 middle과 right point를 조정한다.

```js
var fourSum = function (nums, target) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    for (let left = i + 1; left < nums.length - 2; left++) {
      let middle = left + 1;
      let right = nums.length - 1;

      while (middle < right) {
        const sum = nums[i] + nums[left] + nums[middle] + nums[right];

        if (target === sum) {
          result.push([nums[i], nums[left], nums[middle], nums[right]]);
          middle++;
          right--;
        } else if (target < sum) right--;
        else middle++;
      }
    }
  }

  return result;
};
```

---

result를 unique하게 return 하는 버전

```js
var fourSum = function (nums, target) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (
      nums[i] +
        nums[nums.length - 1] +
        nums[nums.length - 2] +
        nums[nums.length - 3] <
      target
    )
      continue;

    for (let left = i + 1; left < nums.length - 2; left++) {
      if (left > i + 1 && nums[left] === nums[left - 1]) continue;
      if (nums[i] + nums[left] + nums[left + 1] + nums[left + 2] > target)
        break;
      if (
        nums[i] + nums[left] + nums[nums.length - 1] + nums[nums.length - 2] <
        target
      )
        continue;

      let middle = left + 1;
      let right = nums.length - 1;

      while (middle < right) {
        const sum = nums[i] + nums[left] + nums[middle] + nums[right];

        if (target === sum) {
          result.push([nums[i], nums[left], nums[middle], nums[right]]);
          while (middle < right && nums[middle] === nums[middle + 1]) middle++;
          while (middle < right && nums[right] === nums[right - 1]) right--;
          middle++;
          right--;
        } else if (target < sum) right--;
        else middle++;
      }
    }
  }

  return result;
};
```

</p>
</details>
