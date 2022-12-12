## [letter combinations of a phone number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

<br />

### 관련 이론

- hash table
- backtracking

<br />

<details>
<summary>풀이</summary>
<p>

- `backtracking`은 깊이우선탐색 알고리즘이다.
- `digits`의 길이를 최대 깊이로 설정하여 `depth=0`인 버튼부터 `depth=digits길이`인 버튼까지 눌렀을 때 조합 가능한 문자열을 return한다.
- 재귀함수를 이용해 문자열을 누적한다.

```js
const letterCombinations = (digits) => {
  const keypad = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const letter = digits.split("").map((num) => keypad[num]);

  return combinate(letter, 0, "", []);
};

const combinate = (letter, depth, history, result) => {
  if (!letter.length) return result;

  if (letter.length === depth) {
    result.push(history);
  } else {
    for (let i = 0; i < letter[depth]?.length; i++) {
      combinate(letter, depth + 1, history + letter[depth][i], result);
    }
  }

  return result;
};
```

</p>
</details>
