import {increaseAge, UserType} from "./09";

let user: UserType;

beforeEach(() => {
    user = {
        name: "Alex",
        age: 33,
        address: {city: "Fanipol"}
    }
});

test("Should update user age (Object)", () => {
    increaseAge(user);
    expect(user.age).toBe(34);

    const superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000);
});

test("Array reference test", () => {
    let users: Array<UserType> = [
        {name: "Alex", age: 33, address: {city: "Fanipol"}},
        {name: "Dimych", age: 32, address: {city: "Minsk"}}
    ];
    let admins = users;

    admins.push({name: "Bandygan", age: 10, address: {city: "Minsk"}});
    expect(users[2]).toEqual({name: "Bandygan", age: 10, address: {city: "Minsk"}});
});

test("Value type test", () => {
    let usersCount = 100;
    let adminsCount = usersCount;

    adminsCount += 1;
    expect(usersCount).toBe(100);
});

test("Reference type test", () => {
    const cityTitle = {city: "Fanipol"};
    user = {
        name: "Alex",
        age: 33,
        address: cityTitle
    }
    let user2: UserType = {
        name: "Nika",
        age: 31,
        address: cityTitle
    }

    cityTitle.city = "Fanipol City";

    expect(user.address).toBe(user2.address);
    expect(user.address.city).toBe("Fanipol City");
    expect(user2.address.city).toBe("Fanipol City");
});

test("Reference type Array test", () => {
    const cityTitle = {city: "Fanipol"};
    user = {
        name: "Alex",
        age: 33,
        address: cityTitle
    }
    let user2: UserType = {
        name: "Nika",
        age: 31,
        address: cityTitle
    }

    const users = [user, user2, {name: "Lavi", age: 13, address: cityTitle}];
    const admins = [user, user2];

    admins[0].name = "Aliaksei";

    expect(users[0].name).toBe("Aliaksei");
    expect(user.name).toBe("Aliaksei");
});

function passportist(array: Array<string>) {
    const arrayCopy = [...array].sort();
    console.log(arrayCopy);
}

test("Sort array test", () => {
    const letters = ["c", "d", "a", "z", "e"];

    passportist(letters);

    expect(letters).toEqual(["c", "d", "a", "z", "e"]);
});