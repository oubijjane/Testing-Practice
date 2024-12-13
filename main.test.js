
import { capitalize,reverseString } from "./main.js";


test("first character from a string to be capitalized", () => {
    expect(capitalize("test")).toBe("T");
    expect(capitalize("hello")).toBe("H");
}) 

test("reversing a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("thanks")).toBe("sknaht");
})