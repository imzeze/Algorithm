[zigzag conversion](https://leetcode.com/problems/zigzag-conversion/)

<details>
<summary>풀이</summary>
<p>

```js
const convert = (s, numRows) => {
  if (s.length === 1 || numRows === 1) return s;

  let result = "";
  const step = numRows * 2 - 2; // numRows + numRows - 2 (기준점 간격)

  for (let i = 0; i < numRows; i++) {
    // row 반복
    for (let j = i; j < s.length; j += step) {
      // row별 s[j] 조회
      result += s[j];
      if (i !== 0 && i !== numRows - 1 && j + step - i * 2 < s.length) {
        result += s[j + step - i * 2]; // 기준점 사이 문자 조회
      }
    }
  }

  return result;
};
```

</p>
</details>
