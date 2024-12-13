function capitalize(string) {
  return string.charAt(0).toUpperCase();
}
function reverseString(string) {
    let result = ""
    for(let i = string.length - 1; i >= 0; i--) {
        result += string.charAt(i)
    }
    return result;
}
class Calculator {
 add(num1, num2) {
    return num1 + num2;
 }
}

export { capitalize, reverseString, Calculator };
