## [Longest Substring](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

<br />

### 관련 이론

Sliding Window  
Substring

<br />

<details>
<summary>풀이</summary>
<p>

```js
const lengthOfLongestSubstring = (s) => {
  if (s.length <= 1) return s.length;

  const uniqueLength = [];
  for (let start = 0; start < s.length; start++) {
    const memo = [];
    let end = start;
    while (end < s.length && memo.indexOf(s[end]) < 0) {
      memo.push(s[end]);
      end++;
    }
    uniqueLength.push(memo.length);
  }

  return Math.max(...uniqueLength);
};
```

</p>
</details>

<br />

<details>
<summary>1등 풀이</summary>
<p>

```js
const lengthOfLongestSubstring = (s) => {
  const start = 0;
  const temp = "";
  const result = "";

  for (let i = 0; i < s.length; i++) {
    let index = temp.indexOf(s[i]);
    if (index !== -1) {
      start = start + index + 1;
    }
    temp = s.substring(start, i + 1);
    if (result.length < temp.length) {
      result = temp;
    }
  }

  return result.length;
};
```

</p>
</details>

<br />
문자열 길이만큼 순회.

`start` 문자부터 index(`i`)의 문자까지 `temp`에 저장.  
단, `i` 문자가 `temp`에 있는 경우 `start` 조정.

**substring**을 이용했기 때문에 내 풀이와 달리 `start` 반복문이 불필요
