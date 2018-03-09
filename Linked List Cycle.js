/*Given a linked list, determine if it has a cycle in it.*/

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
var hasCycle = function(head) {
    if(head==null)
        return false
    var i = head
    var j = head
    while(j.next!=null && j.next.next!=null) {
        i = i.next
        j = j.next.next
        if(i == j)
            return true
    }
    return false
};