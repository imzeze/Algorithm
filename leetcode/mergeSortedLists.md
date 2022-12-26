```js
var mergeTwoLists = function (list1, list2) {
  const result = new ListNode(0);
  let curResult = result;

  while (list1 || list2) {
    const num1 = list1 ? list1.val : 0;
    const num2 = list2 ? list2.val : 0;

    if ((num1 < num2 || !list2) && list1) {
      curResult.next = list1;
      list1 = list1.next;
    } else if ((num1 >= num2 || !list1) && list2) {
      curResult.next = list2;
      list2 = list2.next;
    }

    curResult = curResult.next;
  }

  return result.next;
};
```
