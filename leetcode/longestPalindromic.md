## [longestPalindromic](https://leetcode.com/problems/longest-palindromic-substring/)

<br />
string의 길이만큼 순회하며

홀수 palindrome과 짝수 palindrome을 찾아 길이를 비교한다.  
palindrome는 기준 index의 양옆을 비교하여 판단한다.  
각 순회에서 얻은 palindrome 길이를 비교하여 가장 긴 palindrome를 리턴한다.
<br />

<details>
<summary>풀이</summary>
<p>

```js
const longestPalindrome = (s) => {
  if (s.length === 0) return "";
  let longest = "";

  let result = "";
  for (let i = 0; i < s.length; i++) {
    const odd = findPalindrome(s, i, i);
    const even = findPalindrome(s, i, i + 1);
    result = odd.length > even.length ? odd : even;
    longest = longest.length > result.length ? longest : result;
  }
  return longest;
};

const findPalindrome = (s, i, j) => {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }
  return s.slice(i + 1, j);
};
```
