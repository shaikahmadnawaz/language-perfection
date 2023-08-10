/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var left = 0;
  var right = s.length - 1;

  while (left < right) {
    var leftChar = s[left].toLowerCase();
    var rightChar = s[right].toLowerCase();

    if (!isAlphanumeric(leftChar)) {
      left++;
    } else if (!isAlphanumeric(rightChar)) {
      right--;
    } else if (leftChar != rightChar) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

function isAlphanumeric(char) {
  return /[a-zA-Z0-9]/.test(char);
}
