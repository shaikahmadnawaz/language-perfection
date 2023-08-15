/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const mappings = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top !== mappings[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
