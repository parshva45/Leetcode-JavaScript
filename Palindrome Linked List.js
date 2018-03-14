/*Given a singly linked list, determine if it is a palindrome.*/

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
var isPalindrome = function(head) {
    var arr = []
    curr = head
    while(curr != null){
        arr.push(curr.val)
        curr = curr.next
    }
    for(i=0, j=arr.length-1; i<j; i++, j--){
        if(arr[i] != arr[j])
            return false
    }
    return true
};