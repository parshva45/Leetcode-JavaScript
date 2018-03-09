/*Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit.
You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times).
However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

//     if(prices.length <= 1)
//         return 0
//     var flag = false
//     var totalmp = 0
//     var mp = 0
//     var min = prices[0]
//     for(var i=1; i<prices.length; i++){
//         if(prices[i] > prices[i-1]){
//             flag = true
//             mp = prices[i] - min
//         }
//         else{
//             if(flag){
//                 totalmp += mp
//                 flag = false
//                 mp = 0
//             }
//             min = prices[i]
//         }
//     }

//     return totalmp + mp
    
    var totalmp = 0
    for(var i=1; i<prices.length; i++){
        if(prices[i]-prices[i-1] > 0)
            totalmp += prices[i]-prices[i-1]
    }
    return totalmp

};