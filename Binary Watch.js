/*A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
Note:
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".*/

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    ans = []
    for(i=0; i<12; i++){
        for(j=0; j<60; j++){
            if (numberOfBitsOn(i) + numberOfBitsOn(j) == num){
                j = j<=9 ? "0"+j : j
                ans.push(i + ":" + j)
            }
        }
    }
    return ans
};

var numberOfBitsOn = function(num){
    return num.toString(2).split(1).length-1
};