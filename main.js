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
export { capitalize, reverseString };
