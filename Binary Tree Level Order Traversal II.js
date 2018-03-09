/*Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    ans = []
    h = 0
    lobHelper(root,ans,h)
    return ans.reverse()
};

var lobHelper = function(node,ans,h){
    if(node != null){
        if(ans.length == h){
            ans[h] = []
        }
        ans[h].push(node.val)
        if(node.left != null){
            lobHelper(node.left,ans,h+1)
        }
        if(node.right != null){
            lobHelper(node.right,ans,h+1)
        }
    }
};