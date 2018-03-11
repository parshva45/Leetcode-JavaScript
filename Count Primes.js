/*Count the number of prime numbers less than a non-negative number, n.*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    count = 0
    isNotPrime = []
    for(i=2; i<Math.sqrt(n); i++){
        if(isNotPrime[i] == null){
            for(j=i; i*j<n; j++)
                isNotPrime[i*j] = true
        }
    }
    for(i=2; i<n; i++){
        if(isNotPrime[i] == null)
            count++
    }
    return count
};