## [addTwoNumbers](https://leetcode.com/problems/add-two-numbers/)

<br />

<details>
<summary>number형 계산 풀이</summary>
<p>

```js
var reverse = function (x) {
  const MAX_NUMBER = Math.pow(2, 31);
  let result = 0;
  let temp = Math.abs(x);

  while (temp > 0) {
    result = result * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  if (result > MAX_NUMBER) return 0;
  return x < 0 ? -result : result;
};
```

</p>
</details>

<br />

<details>
<summary>string 전환 풀이</summary>
<p>

```js
var reverse = function (x) {
  const MAX_NUMBER = Math.pow(2, 31);
  const temp = Math.abs(x);

  let reverseNumbers = Number(temp.toString().split("").reverse().join(""));
  if (reverseNumbers > MAX_NUMBER) return 0;
  let answer = x < 0 ? -reverseNumbers : reverseNumbers;

  return answer;
};
```

</p>
</details>

<br/>

---

string으로 전환한 풀이의 runtime이 더 짧은 것으로 확인
