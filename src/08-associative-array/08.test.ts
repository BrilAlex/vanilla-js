import {UsersType} from "./08";

let usersObj: UsersType;

beforeEach(() => {
    usersObj = {
        "101": {id: 101, name: "Dimych"},
        "1321": {id: 1321, name: "Natasha"},
        "344543": {id: 344543, name: "Valera"},
        "555343": {id: 555343, name: "Katya"}
    };
});

test("Should update corresponding user from object", () => {
    usersObj[344543].name = "Viktor";
    expect(usersObj[344543].name).toBe("Viktor");
});

test("Should delete corresponding user from object", () => {
    delete usersObj[555343];
    expect(usersObj[555343]).toBeUndefined();
});