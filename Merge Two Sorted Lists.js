/*Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 && l2){
        var p = l1.val
        var q = l2.val
        var ans
        if(p < q){
            ans = new ListNode(p)
            l1 = l1.next
        }
        else{
            ans = new ListNode(q)
            l2 = l2.next
        }
        main = ans

        while(l1 && l2){
            p = l1.val
            q = l2.val
            if(p < q){
                ans.next = new ListNode(p)
                ans = ans.next
                l1 = l1.next
            }
            else{
                ans.next = new ListNode(q)
                ans = ans.next
                l2 = l2.next
            }
        }
    }
    else{
        if(l1)
            return l1
        else
            return l2
    }

    if(l1)
        ans.next = l1
    else if(l2)
        ans.next = l2
    return main
};