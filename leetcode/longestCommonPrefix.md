## [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

<br />

### 관련 이론

- String

<br />

<details>
<summary>풀이</summary>
<p>

- `reduce`를 이용해 `prev` 문자와 `curr` 문자 비교
- 두 문자 길이 중 최소 길이 + 1 부터 1까지 `slice`한 문자를 비교
- `slice`한 문자가 같은 경우 해당 문자를 return해 다음 문자와 비교

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const result = strs.reduce((prev, curr) => {
    const minLen = Math.min(prev.length, curr.length);
    for (i = minLen + 1; i > 0; i--) {
      if (prev.slice(0, i) === curr.slice(0, i)) return curr.slice(0, i);
    }

    return "";
  });

  return result;
};
```

</p>
</details>
