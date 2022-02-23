import {UserType} from "./08";

let users: UserType;
beforeEach(() => {
  users = {
    "101": {id: 101, name: "Dimych"},
    "1255": {id: 1255, name: "Natasha"},
    "45": {id: 45, name: "Valera"},
    "78787": {id: 78787, name: "Katya"},
  };
});

test("Should update corresponding user from object", () => {
  users["78787"].name = "Ekaterina";

  expect(users["78787"]).toEqual({id: 78787, name: "Ekaterina"});
});

test("Should delete corresponding user from object", () => {
  delete users["78787"];

  expect(users["78787"]).toBeUndefined();
});