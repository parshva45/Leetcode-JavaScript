/*Given an array of integers and an integer k, find out whether there are two distinct indices i and j
in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    dict = {}
    for(i=0; i<nums.length; i++){
        if(nums[i] in dict){
            if(i-dict[nums[i]]<=k)
                return true
        }
        dict[nums[i]] = i
    }
    return false
};