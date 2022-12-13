## [3sum](https://leetcode.com/problems/3sum/)

<br />

### 관련 이론

- sort
- two point

<br />

<details>
<summary>풀이</summary>
<p>

- 주어진 배열을 오름차순으로 정렬한다.
- `current point`, `left point`, `right point`를 지정한다.
- 정렬하였기때문에 세 point의 숫자 합이 0보다 작으면 `left point`를 오른쪽으로 이동시켜야하고, 0보다 크면 `right point`를 왼쪽으로 이동시켜야한다.
- 3숫자 조합의 중복을 없애기 위해 `current point`의 숫자가 `이전 current point`의 숫자와 같으면 skip한다.
- `left point`와 `right point`도 동일하다.

```js
const threeSum = (nums) => {
  const result = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let leftPoint = i + 1;
    let rightPoint = sortedNums.length - 1;

    while (leftPoint < rightPoint) {
      const sum =
        sortedNums[i] + sortedNums[leftPoint] + sortedNums[rightPoint];

      if (sum === 0) {
        result.push([
          sortedNums[i],
          sortedNums[leftPoint],
          sortedNums[rightPoint],
        ]);
        leftPoint++;
        rightPoint--;

        while (sortedNums[leftPoint] === sortedNums[leftPoint - 1]) leftPoint++;
        while (sortedNums[rightPoint] === sortedNums[rightPoint + 1])
          rightPoint--;
      } else if (sum < 0) {
        leftPoint++;
      } else if (sum > 0) {
        rightPoint--;
      }
    }
  }

  return result;
};
```

</p>
</details>
