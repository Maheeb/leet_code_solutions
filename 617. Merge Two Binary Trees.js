/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (root1 ===null)
    {
        return root2;
    }
    if (root2 === null)
    {
        return root1;
    }
    if (root1 == null && root2 == null)
    {
        return null;
    }

    if (root1 !=null && root2 !=null)
    {
        root1.val += root2.val;
        root1.left = mergeTrees(root1.left, root2.left);
        root1.right = mergeTrees(root1.right, root2.right);

        return root1;

    }
};
let root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
console.log(mergeTrees(root1,root2))