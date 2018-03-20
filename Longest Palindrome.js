/*Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    length = 0
    dict = {}
    for(i=0; i<s.length; i++){
        if(s[i] in dict)
            dict[s[i]]++
        else
            dict[s[i]] = 1
    }
    for(key in dict){
        count = dict[key]
        if(count%2 == 0)
            length += count
        else
            length += count-1
    }
    if(length < s.length)
        return length + 1
    return length
};