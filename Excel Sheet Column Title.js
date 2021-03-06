/*Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if (n == 0)
        return ""
    var div = parseInt((n-1)/26,10)
    var rem = (n-1)%26
    return convertToTitle(div) + String.fromCharCode(65+rem)
};