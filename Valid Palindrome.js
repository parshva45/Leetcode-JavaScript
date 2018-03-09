/*Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // var str = []
    // var j = 0
    // for(var i=0; i<s.length; i++){
    //     if(s[i].match(/^[0-9a-zA-Z]+$/) != null)
    //         str[j++] = arr[i].toLowerCase()
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    for(i = 0, j = s.length-1; i<=j; i++, j--){
        if(s[i] != s[j])
            return false
    }
    return true
};