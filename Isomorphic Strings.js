/*Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    sdict = {}
    tdict = {}
    for(i=0; i<s.length; i++){
        if(s[i] in sdict){
            if(!t[i] in tdict || sdict[s[i]] != tdict[t[i]])
                return false
        }
        else{
            if(t[i] in tdict)
                return false
            sdict[s[i]] = i
            tdict[t[i]] = i
        }
    }
    return true
};