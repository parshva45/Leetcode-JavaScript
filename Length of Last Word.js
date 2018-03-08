/*Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    /*
    s = s.trim()
    if(s == '')
        return 0
    else if(s.lastIndexOf(' ') == -1)
        return s.length
    else
        return s.substr(s.lastIndexOf(' ')+1).length
        */
    var arr = s.trim().split(' ')
    if(arr[0])
        return arr[arr.length-1].length
    return 0
};