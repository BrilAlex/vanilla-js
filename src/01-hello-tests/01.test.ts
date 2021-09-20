import {mult, splitIntoWords, sum} from "./01";

//data
let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
});

test("Sum is correct", () => {
    //action
    let result1 = sum(a, b);
    let result2 = sum(b, c);

    //expected result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
});

test("Multiply is correct", () => {
    //action
    let result1 = mult(a, b);
    let result2 = mult(b, c);

    //expected result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
});

test("Split into words is correct", () => {
    //data
    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best  programming language."

    //action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    //expected result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
});