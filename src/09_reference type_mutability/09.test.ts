import {increaseAge, sortLetters, UserType} from "./09";

let user: UserType;

beforeEach(() => {
  user = {
    name: "Alex",
    age: 34,
  }
});

test("Object reference type test", () => {
  increaseAge(user);

  expect(user.age).toBe(35);

  const superman = user;
  superman.age = 1000;

  expect(user.age).toBe(1000);
  expect(superman.age).toBe(1000);
});

test("Complex object reference type test", () => {
  const address = {
    city: "Fanipol"
  }

  const user1 = {
    name: "Alex",
    age: 29,
    address: address,
  };

  const user2 = {
    name: "Karina",
    age: 29,
    address: address,
  };

  address.city = "London";

  expect(user1.address).toBe(user2.address);
  expect(user1.address.city).toBe("London");
  expect(user2.address.city).toBe("London");
});

test("Array reference type test", () => {
  const users = [
    {name: "Alex", age: 34},
    {name: "Karina", age: 29},
  ];

  const family = users;
  family.push({name: "Lavi", age: 1});

  expect(family.length).toBe(3);
  expect(family[2]).toEqual({name: "Lavi", age: 1});
  expect(users.length).toBe(3);
  expect(users[2]).toEqual({name: "Lavi", age: 1});
});

test("Complex array reference type test", () => {
  const address = {
    city: "Fanipol"
  }

  const user1 = {
    name: "Alex",
    age: 29,
    address: address,
  };

  const user2 = {
    name: "Karina",
    age: 29,
    address: address,
  };

  const users = [user1, user2, {name: "Lavi", age: 1, address: address}];
  const admins = [user1, user2];

  admins[0].name = "Alexei";

  expect(user1.name).toBe("Alexei");
  expect(users[0].name).toBe("Alexei");
});

test("Value type test", () => {
  let usersCount = 100;

  let adminsCount = usersCount;

  adminsCount++;

  expect(usersCount).toBe(100);
  expect(adminsCount).toBe(101);
});

test("Array method sort test", () => {
  const letters = ["c", "d", "a", "z", "e"];

  sortLetters(letters);

  expect(letters).toEqual(["c", "d", "a", "z", "e"]);
});