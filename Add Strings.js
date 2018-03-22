/*Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    b = num1.length >= num2.length ? num1 : num2
    s = num1.length < num2.length ? num1 : num2
    ans = ""
    carry = 0
    for(i=b.length-1, j=s.length-1; i>=0; i--, j--){
        if(s[j] != null)
            sum = Number(b[i]) + Number(s[j]) + carry
        else
            sum = Number(b[i]) + carry
        ans = sum%10 + ans
        carry = parseInt(sum/10)
    }
    if(carry == 1)
        return carry + ans
    return ans
};