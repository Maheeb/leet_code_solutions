/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
   let prev = null
    while (head !=null)
    {

        let nextNode = head.next
        head.next = prev
        prev = head
        // console.log(prev)
        head = nextNode
    }
    return prev
};

 head = [1,2,3,4,5]
console.log(reverseList(head))