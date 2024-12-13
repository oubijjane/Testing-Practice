
import { capitalize,reverseString, Calculator } from "./main.js";


test("first character from a string to be capitalized", () => {
    expect(capitalize("test")).toBe("T");
    expect(capitalize("hello")).toBe("H");
}) 

test("reversing a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("thanks")).toBe("sknaht");
})

test("adding operation", () => {
    const calculator = new Calculator()
    expect(calculator.add(2,2)).toBe(4);
    expect(calculator.add(0,2)).toBe(2);
})