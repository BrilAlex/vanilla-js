import {createGreetingMessages, ManType} from "./05";

let people: Array<ManType>;

beforeEach(() => {
  people = [
    {name: "Andrei Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitri Sidorov", age: 18},
  ];
});

test("Should get the array of greeting messages", () => {
  const messages = createGreetingMessages(people);

  expect(messages[0]).toBe("Hello, Andrei! Welcome to IT-Incubator.");
  expect(messages[1]).toBe("Hello, Alexander! Welcome to IT-Incubator.");
  expect(messages[2]).toBe("Hello, Dmitri! Welcome to IT-Incubator.");
});