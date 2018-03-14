/*Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var answer = []
    if(root != null)
        binaryTreePathsHelper(root,"",answer)
    return answer
};

var binaryTreePathsHelper = function(node, path, answer){
    if(node.left == null && node.right == null)
        answer.push(path+node.val)
    if(node.left != null)
        binaryTreePathsHelper(node.left, path+node.val+"->", answer)
    if(node.right != null)
        binaryTreePathsHelper(node.right, path+node.val+"->", answer)
}