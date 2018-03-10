/*Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var bin = dec2bin(n)
    count = 0
    for(i=0; i<bin.length; i++)
    	if(bin[i] == '1')
    		count++
    return count
};

var dec2bin = function(dec){
    return (dec >>> 0).toString(2);
}