/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(left_tree, right_tree = left_tree) {

    if (!left_tree && !right_tree) {
        return true;
    }

    
    if (!left_tree || !right_tree) {
        return false;
    }

    if(left_tree.val != right_tree.val)
    {
        return false;
    }

    let first = isSymmetric(left_tree.left, right_tree.right)
    let second = isSymmetric(left_tree.right, right_tree.left)

    return first && second;  
};