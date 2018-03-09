/*Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(numRows) {
    if(numRows == 0)
        return [1]
    var arr = [[1]]
    i = 1
    return generateHelper(arr,i,numRows)
};

var generateHelper = function(arr,i,numRows){
    arr[i] = [arr[i-1][0]]
    var j = 1
    for(; j < arr[i-1].length; j++)
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    arr[i][j] = arr[i-1][j-1]
    if(i == numRows)
        return arr[i]
    else
        return generateHelper(arr,i+1,numRows)
}