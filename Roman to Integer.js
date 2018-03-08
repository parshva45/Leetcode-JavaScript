/*Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.*/

/**
 * @param {string} s
 * @return {number}
 */

// L 50 C 100 D 500 M 1000
// eg: 998 - DCCCCLXXXXVIII
var romanToInt = function(s) {
    val = 0
    s = s.split('')
    var flag = false
    for(i=0; i<s.length;){
        switch(s[i]){
            case 'M': val += 1000
                i++
                break
            case 'D': val += 500
                i++
                break
            case 'C': 
                if(s[i+1]){
                    if(s[i+1] != 'D' && s[i+1] != 'M'){
                        val += 100
                        i++
                        break
                    }else{
                        val -= 100
                        i++
                        break
                    }
                }
                else{
                    val += 100
                    i++
                    break
                }
            case 'L': val += 50
                i++
                break
            case 'X': 
                if(s[i+1]){
                    if(s[i+1] != 'L' && s[i+1] != 'C'){
                        val += 10 
                        i++
                        break
                    }else{
                        val -= 10
                        i++
                        break
                    }
                }
                else{
                    val += 10 
                    i++
                    break
                }
            case 'V': val += 5
                i++
                break
            case 'I':
                if(s[i+1]){
                    if(s[i+1] != 'I'){
                        val -= 1
                        i++
                        break
                    }
                    else{ // s[i+1] = 'I' -> II
                        if(s[i+2]){ // has to be an I
                            if(s[i+3]){ // has to be an I
                                val += 3
                                i += 3
                                break
                            } // no s[i+3]
                            else{
                                val += 2
                                i += 2
                                break
                            }
                        }
                        else{
                            val += 2
                            i += 2
                            break
                        }
                    }
                }
                else{
                    val += 1
                    i++
                }
        }
    }
    return val
};