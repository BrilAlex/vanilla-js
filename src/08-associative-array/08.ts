const usersObj = {
    "0": "Dimych",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya"
};

// Type for associative array
export type UsersType = {
    [key: string]: {id: number, name: string}
}

// Associative array
export let users: UsersType = {
    "101": {id: 101, name: "Dimych"},
    "1321": {id: 1321, name: "Natasha"},
    "344543": {id: 344543, name: "Valera"},
    "555343": {id: 555343, name: "Katya"}
};

var newUser = {id: 100500, name: "Igor"};

//users[101]; //Getting element from associative array

//users[newUser.id.toString()] = newUser; // Adding new element to associative array

//delete users[1321]; // Deleting element from associative array

users[344543].name = "Vitya"; // Updating object property in associative array

// Array
export let usersArray = [
    {id: 101, name: "Dimych"},
    {id: 1321, name: "Natasha"},
    {id: 344543, name: "Valera"},
    {id: 555343, name: "Katya"}
];

//usersArray.find(el => el.id === 101); //Getting element from array

//usersArray.push(newUser); // Mutable adding new element to array
//var usersArrayCopy = [...usersArray, newUser]; // Immutable adding new element to array

//usersArray = usersArray.filter(el => el.id !== 1321); // Deleting element from array