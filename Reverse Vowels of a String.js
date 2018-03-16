/*Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(s == '' )
        return s
    letters = s.split('')
    i = 0
    j = letters.length-1
    while(letters[i] && !isVowel(letters[i]))
        i++
    while(letters[i] && !isVowel(letters[j]))
        j--
    while(i<j){
        letters = swap(letters,i,j)
        i++
        j--
        while(letters[i] && !isVowel(letters[i]))
            i++
        while(letters[i] && !isVowel(letters[j]))
            j--
    }
    return letters.join('')
};

var isVowel = function(letter){
    if(letter.match(/[a-zA-Z]/i) == null)
        return false
    vowels = ['a','A','e','E','i','I','o','O','u','U']
    return vowels.indexOf(letter) != -1
}

var swap = function(arr,i,j){
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}