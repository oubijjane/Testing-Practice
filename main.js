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
    if(key > 26) {
        key = key % 26;
    }
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let cipheredCharNUm = string.charCodeAt(i);
    if (cipheredCharNUm >= 97 && cipheredCharNUm <= 122) {
      cipheredCharNUm += key;
      if(cipheredCharNUm > 122) {
        cipheredCharNUm -= 26;
      }
    } else if (cipheredCharNUm >= 65 && cipheredCharNUm <= 90) {
        cipheredCharNUm += key;
        if(cipheredCharNUm > 90) {
          cipheredCharNUm -= 26;
        }
    }
    result += String.fromCharCode(cipheredCharNUm);
  }
  /* helperMethode(nume, key); */
  console.log(result);
  return result;
}
caesarCipher("xyz", 3);
console.log(1000 % 26);
console.log("1".charCodeAt(0));
export { capitalize, reverseString, Calculator, caesarCipher };
