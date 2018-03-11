/*Reverse a singly linked list.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    arr = []
    cur = head
    while(cur != null){
        arr.push(cur.val)
        cur = cur.next
    }
    return arr.reverse()
    head = new ListNode(arr[0])
    curr = head
    for(i=1; i<arr.length-1; i++){
        curr.next = new ListNode(arr[i])
        curr = curr.next
    }
    curr.next = null
    return head
};