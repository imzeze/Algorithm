## [container with most water](https://leetcode.com/problems/container-with-most-water/)

<br />

### 관련 이론

- greedy (탐욕법)

<br />

<details>
<summary>풀이</summary>
<p>

- 현재 위치의 높이: point

- 배열에서 point보다 높은 첫번째 point(`firstEndPoint`)와 마지막 point(`lastEndPoint`)를 찾는다.

- 베열에서 첫번째 point와 `lastEndPoint`까지의 거리를 구하고, 마지막 point와 `firstEndPoint`까지의 거리를 구한다.

- 최대 길이를 point와 곱해 `maxArea`를 구한다.

```js
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const point = arr[i];
    const firstEndPoint = arr.findIndex((e) => e >= point);
    let lastEndPoint = i;
    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j] >= point) {
        lastEndPoint = j;
        break;
      }
    }
    const maxLength = Math.max(
      Math.abs(arr.lastIndexOf(point) - firstEndPoint),
      Math.abs(arr.indexOf(point) - lastEndPoint)
    );
    result = Math.max(result, point * maxLength);
  }

  return result;
};
```

😭 leetcode에서 `findLastIndex()`를 사용하지 못 했다.

😭 time limit exceeded 에러를 해결하지 못 했다.

</p>
</details>

<br />

<details>
<summary>재풀이</summary>
<p>

- 양끝에 `leftPoint`와 `rightPoint`를 둔다.

- `leftPoint`와 `rightPoint` 사이의 영역을 구한다.

- point의 높이가 높아지면 영역의 크기가 커지기 때문에 `leftPoint`와 `rightPoint` 중 높이가 낮은 point를 좌 또는 우로 한칸씩 옮겨 영역의 크기를 다시 구한다.

```js
const maxArea = (arr) => {
  let leftPoint = 0;
  let rightPoint = arr.length - 1;

  let result = 0;
  while (leftPoint < rightPoint) {
    result = Math.max(
      result,
      Math.min(arr[leftPoint], arr[rightPoint]) * (rightPoint - leftPoint)
    );
    if (arr[leftPoint] < arr[rightPoint]) leftPoint++;
    else rightPoint--;
  }

  return result;
};
```

</p>
</details>
