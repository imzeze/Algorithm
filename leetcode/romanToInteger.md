## [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

<br />

### 관련 이론

- hash table
- Math
- String

<br />

<details>
<summary>풀이</summary>
<p>

- 로마숫자는 앞의 숫자가 뒤의 숫자보다 작은 경우, 뒤의 숫자에서 앞의 숫자만큼 뺀다.
- `reduce`를 이용해 이전 값과 현재값 비교한다.
- 맨앞에서부터 `i`값과 `i + 1`값을 비교하는 경우, 맨앞의 숫자는 다음 숫자를 알 수 없기 때문에 양수인지 음수인지 판단하기 어렵다.
- `reverse`를 이용해 맨뒤에서부터 비교하면, 첫번째 숫자는 무조건 양수이기 때문에 비교가 쉽다.
- 이전값이 현재값보다 큰 경우 현재값을 빼준다.

```js
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  s.split("")
    .reverse()
    .reduce((prev, curr) => {
      if (!prev || symbols[prev] <= symbols[curr]) {
        result += symbols[curr];
        return curr;
      } else {
        result -= symbols[curr];
        return "";
      }
    }, "");

  return result;
};
```

</p>
</details>
