/*Write a function to find the longest common prefix string amongst an array of strings.*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    ans = ""
    if(strs[0] == null)
        return ans
    
    var min = shortest(strs)
    var i = 0
    var j = min.length-1
    var mid
    while(i <= j){
        mid = i + Math.floor((j-i)/2)
        if(allEqual(strs,i,mid)){
            ans += min.substr(i,mid-i+1)
            i = mid+1
        }
        else{
            j = mid-1
        }
    }
    return ans
};

var shortest = function(strs){
    var min = strs[0]
    for(var i=1; i<strs.length; i++){
        min = (strs[i].length < min.length) ? strs[i] : min
    }
    return min
};

var allEqual = function(strs,i,j){
    var str = strs[0].substr(i,j-i+1)
    var flag = true
    for(var k=1; k<strs.length; k++){
        if(strs[k].substr(i,j-i+1) != str){
            flag = false
            break
        }
    }
    return flag
};