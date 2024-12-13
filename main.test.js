import { capitalize, reverseString, Calculator, caesarCipher } from "./main.js";

test("first character from a string to be capitalized", () => {
  expect(capitalize("test")).toBe("T");
  expect(capitalize("hello")).toBe("H");
});

test("reversing a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("thanks")).toBe("sknaht");
});

test("adding operation", () => {
  const calculator = new Calculator();
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(0, 2)).toBe(2);
});

test("subtracting operation", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(0, 2)).toBe(-2);
});

test("multiplying operation", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(3, 2)).toBe(6);
  expect(calculator.multiply(0, 2)).toBe(0);
});

test("multiplying operation", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(3, 2)).toBe(6);
  expect(calculator.multiply(0, 2)).toBe(0);
});
test("deviding operation", () => {
  const calculator = new Calculator();
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
  expect(calculator.divide(0, 2)).toBeCloseTo(0);
});

test("Shift Cipher lower and upper case", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("ABC", 2)).toBe("CDE");
});
test("Shift Cipher keep the same capitalization", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("Shift Cipher large key", () => {
  expect(caesarCipher("abc", 29)).toBe("def");
  expect(caesarCipher("XYZ", 29)).toBe("ABC");
});

test("Shift Cipher with non alphabets", () => {
  expect(caesarCipher("Hello, World!", 29)).toBe("Khoor, Zruog!");
  expect(caesarCipher("Hello!", 29)).toBe("Khoor!");
});
