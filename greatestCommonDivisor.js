/** 1071. Greatest Common Divisor of Strings
 *
 * Given two strings, str1 and str2, return the
 * largest string x, such that x divides both str1 and str2.
 *
 * For two strings str1 and str2 we say "str1 divides str2 if,
 * and only if str1 = str2 + str2 + str2....+ str2" (i.e., str2
 * is concatenated with itself one or more times.)
 *
 * Example 1:
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 * Example 2:
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 * Example 3:
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 */

/**To solve this problem the key insight is to understand that the largest
 * string "x" that divides both "str1" and "str2" is essentially the GCD
 * of the two strings in terms of repeated substring patterns.
 *
 * First we should find the GCD of the lengths of the two strings:
 * This step is crucial because the length of the potential greatest
 * common divisor string must divide the lengths of both "str1" and "str2".
 * The GCD gives us the maximum possible length of this string.
 *
 * Second, checking if the GCD string divides both "str1" and "str2":
 * Once we have the GCD string, we need to verify if repeating it
 * forms both "str1" and "str2".
 *
 *
 */

function gcdOfStrings(str1, str2) {
  //Function to find the greatest common divisor of the two numbers
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  //Check if str1 + str2 equals str2 + str1 to ensure they are composed
  //of the same substrings
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  //The gcd of the lengths of str1 and str2 will give us the length
  //of the largest possible gcd string
  const gcdLength = gcd(str1.length, str2.length);
  console.log("gcdLength=",gcdLength)

  //return the substring of str1 from 0 to gcdLength
  return str1.substring(0, gcdLength);
}
console.log(gcdOfStrings("ABCABC", "ABC")); // "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // "AB"
console.log(gcdOfStrings("LEET", "CODE")); // ""
console.log(gcdOfStrings("ABCDEF", "ABC")); // ""
