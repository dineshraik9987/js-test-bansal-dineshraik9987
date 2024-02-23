/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    class Solution(object):
    def isValid(s: str) -> bool:

        """
        :type s: str
        :rtype: bool
        """
        pass
    
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack
print(isValid("()"))       
print(isValid("()[]{}"))   
print(isValid("(]"))        


    
};

module.exports = { isValid };


