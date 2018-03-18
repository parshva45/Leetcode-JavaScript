/*Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    // uniques = []
    // repeats = []
    // for(i=0; i<s.length; i++){
    //     r = repeats.indexOf(s[i])
    //     if(r == -1){
    //         u = uniques.indexOf(s[i])
    //         if(u == -1)
    //             uniques.push(s[i])
    //         else{
    //             uniques.splice(u,1)
    //             repeats.push(s[i])
    //         }
    //     }
    // }
    // if(uniques[0] != null)
    //     return s.indexOf(uniques[0])
    // return -1
    
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i]) == s.lastIndexOf(s[i]))
            return i
    return -1    
};