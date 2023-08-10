class Solution {

  public static String reverseWords(String s) {
    String[] words = s.split("\\s+");
    StringBuilder result = new StringBuilder();

    for (int i = words.length - 1; i >= 0; i--) {
      result.append(words[i]).append(" ");
    }

    return result.toString().trim();
  }
}
