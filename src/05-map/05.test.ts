import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: "Alex Brilevski", age: 34},
        {name: "Pavel Lebedev", age: 30},
        {name: "Alexander Ivanov", age: 25},
        {name: "Dmitry Petrov", age: 18}
    ];
});

test("Should create 4 greeting messages", () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(4);
    expect(messages[0]).toBe("Hello, Alex! Welcome to IT-Incubator!");
    expect(messages[1]).toBe("Hello, Pavel! Welcome to IT-Incubator!");
    expect(messages[2]).toBe("Hello, Alexander! Welcome to IT-Incubator!");
    expect(messages[3]).toBe("Hello, Dmitry! Welcome to IT-Incubator!");
})