/*Given an array of integers, every element appears twice except for one. Find that single one.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // O(n^2) solution
    // var arr = [];
    // for(var i=0; i<nums.length; i++){
    //     var index = arr.indexOf(nums[i])
    //     if(index == -1)
    //         arr.push(nums[i])
    //     else{
    //         arr.splice(index,1)
    //     }
    // }
    // return arr[0]
    
    // XOR property : a xor b xor a = a xor a xor b = 0 xor b = b
    var xorValue = nums[0]
    for (i = 1; i < nums.length; i++)
        xorValue ^= nums[i]
    return xorValue
};