/*Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.*/

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
var deleteDuplicates = function(head) {
    if(head){
        var ans = new ListNode(head.val)
        var curHead = head
        var curAns = ans
        while(curHead.next){
            if(curHead.val != curHead.next.val){
                curAns.next = new ListNode(curHead.next.val)
                curAns = curAns.next
            }
            curHead = curHead.next
        }
        return ans
    }
    return head
};