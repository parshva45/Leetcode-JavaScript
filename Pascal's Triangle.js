/*Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0)
        return []
    if(numRows == 1)
        return [[1]]
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
    if(i+1 == numRows)
        return arr
    else
        return generateHelper(arr,i+1,numRows)
}