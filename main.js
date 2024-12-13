function capitalize(string) {
  return string.charAt(0).toUpperCase();
}
function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string.charAt(i);
  }
  return result;
}
class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

function caesarCipher(string, key) {
    //if the key is larger the 26 which is the number of the alphabets
    if(key > 26) {
        key = key % 26;
    }
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let cipheredCharNUm = string.charCodeAt(i);
    //alphabets from a to z (lower case)
    if (cipheredCharNUm >= 97 && cipheredCharNUm <= 122) {
      cipheredCharNUm += key;
      //start from a if the cipheredCharNUm surpass the z (122)
      if(cipheredCharNUm > 122) {
        cipheredCharNUm -= 26;
      }
      //alphabets from A to Z (upper case)
    } else if (cipheredCharNUm >= 65 && cipheredCharNUm <= 90) {
        cipheredCharNUm += key;
        //start from A if the cipheredCharNUm surpass the Z (90)
        if(cipheredCharNUm > 90) {
          cipheredCharNUm -= 26;
        }
    }
    result += String.fromCharCode(cipheredCharNUm);
  }
  return result;
}
caesarCipher("xyz", 3);
console.log(1000 % 26);
console.log("1".charCodeAt(0));
export { capitalize, reverseString, Calculator, caesarCipher };
