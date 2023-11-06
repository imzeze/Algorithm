## [addTwoNumbers](https://leetcode.com/problems/add-two-numbers/)

<br />

### 관련 이론

- singly linked list
- 객체 복사 (얕은 복사)

<br />

<details>
<summary>풀이</summary>
<p>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const result = new ListNode(0);
  let currentl1 = l1;
  let currentl2 = l2;
  let currentResult = result;
  let carry = 0;

  while (currentl1 || currentl2 || carry) {
    const temp1 = currentl1 ? currentl1.val : 0;
    const temp2 = currentl2 ? currentl2.val : 0;
    const sum = temp1 + temp2 + carry;

    currentResult.next = new ListNode(sum % 10);
    if (currentl1) currentl1 = currentl1.next;
    if (currentl2) currentl2 = currentl2.next;
    currentResult = currentResult.next;
    carry = sum >= 10 ? 1 : 0;
  }

  return result.next;
};
```

</p>
</details>
