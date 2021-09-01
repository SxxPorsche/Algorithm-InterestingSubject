//请判断一个链表是否为回文链表。
//
// 示例 1:
//
// 输入: 1->2
//输出: false
//
// 示例 2:
//
// 输入: 1->2->2->1
//输出: true
//
//
// 进阶：
//你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/*var isPalindrome = function(head) {
    let tail = head;
    const arr = [];
    while(tail) {
        arr.push(tail.val);
        tail = tail.next;
    }
    console.log(arr);
    for (let i = 0, j = arr.length - 1; i < j; i+= 1, j -= 1) {
        if(arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
}; */

var isPalindrome = function(head) {
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const arr = [-129,-129];
const head = new ListNode(arr[0]);
let tail = head;

for (let i = 1; i < arr.length; i += 1) {
    const node = new ListNode(arr[i]);
    tail.next = node;
    tail = node;
}

console.log(isPalindrome(head));

let node = head;

while(node && node.next) {
    console.log(node.val);
    node = node.next;
}

console.log(node ? node.val : null);
