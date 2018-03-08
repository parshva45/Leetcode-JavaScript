/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 != 0)
        return false
    if(s[0]){
        var stack = []
        var a = s.split('')
        for(var i=0; i<a.length; i++){
            if(a[i] == '{' || a[i] == '[' || a[i] == '(')
                stack.push(a[i])
            else{
                switch(a[i]){
                    case '}':
                        if(stack.pop() != '{')
                            return false
                        else
                            break
                    case ']':
                        if(stack.pop() != '[')
                            return false
                        else
                            break
                    case ')':
                        if(stack.pop() != '(')
                            return false
                        else
                            break
                }
            }
        }
        if(stack[0])
            return false
    }
    return true
};