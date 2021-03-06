/*Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var Asize = length(headA)
    var Bsize = length(headB)

    pointerA = headA
    pointerB = headB

    if(Asize != Bsize){
        if(Asize > Bsize)
            for(var i=0; i<(Asize - Bsize); i++)
                pointerA = pointerA.next
        else
            for(var i=0; i<(Bsize - Asize); i++)
                pointerB = pointerB.next
    }
    while(pointerA != pointerB){
        pointerA = pointerA.next
        pointerB = pointerB.next
    }
    return pointerA
};

var length = function(node){
    var len = 0
    while(node != null){
        len++
        node = node.next
    }
    return len
}