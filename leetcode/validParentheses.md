## [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

<br />

### 관련 이론

- stack

<br />

<details>
<summary>풀이</summary>
<p>

```js
var isValid = function (s) {
  const arr = s.split("");
  const store = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  while (arr.length) {
    const char = arr.shift();
    const prev = store[store.length - 1];

    if (pairs[char] && pairs[char] === prev) store.pop();
    else store.push(char);
  }

  return store.length > 0 ? false : true;
};
```

</p>
</details>
