/*Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var bin = dec2bin(n)
    diff = 32 - bin.length
    for(i=0; i<diff; i++){
    	bin = "0"+bin
    }
    return parseInt(bin.split('').reverse().join(''),2)
};

var dec2bin = function(dec){
    return (dec >>> 0).toString(2);
}