
import { capitalize } from "./main.js";


test("first character from a string to be capitalized", () => {
    expect(capitalize("test")).toBe("T");
    expect(capitalize("hello")).toBe("H");
}) 