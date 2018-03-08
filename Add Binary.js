/*Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100"*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var a = a.split('').map(Number)
    var b = b.split('').map(Number)
    
    var smaller = (a.length < b.length)?a:b
    var bigger = (a.length < b.length)?b:a
    var diff = bigger.length - smaller.length
    for(var i=0; i < diff; i++)
        smaller.unshift(0)
        
    var carry = 0
    var addn = []
    var i = bigger.length-1
    while(i >= 0){
        var ans = smaller[i]+bigger[i]+carry
        if(ans == 2){
            addn[i] = 0
            carry = 1
        }
        else if(ans == 3){
            addn[i] = 1
            carry = 1
        }
        else{
            addn[i] = ans
            carry = 0
        }
        i--
    }
    if(carry == 1)
        addn.unshift(1)
    return addn.join('')
};