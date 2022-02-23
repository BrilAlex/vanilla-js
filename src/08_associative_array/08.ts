export type UserType = {
  [key: string]: {id: number, name: string}
};

let usersObj: UserType = {
  "101": {id: 101, name: "Dimych"},
  "1255": {id: 1255, name: "Natasha"},
  "45": {id: 45, name: "Valera"},
  "78787": {id: 78787, name: "Katya"},
};

let newUser = {id: 100500, name: "Igor"};

// Поиск элемента в ассоциативном массиве
// users[78787]

// Добавление нового элемента в ассоциативный массив
usersObj[newUser.id] = newUser;

// Обновление объекта в ассоциативном массиве
usersObj[newUser.id].name = "Alex";

// Удаление элемента из ассоциативного массива
delete usersObj[newUser.id];


export let usersArray = [
  {id: 101, name: "Dimych"},
  {id: 1255, name: "Natasha"},
  {id: 45, name: "Valera"},
  {id: 78787, name: "Katya"},
];

// Поиск элемента в обычном массиве
usersArray.find(u => u.id === 78787);

// Мутабельное добавление нового элемента в обычный массив
usersArray.push(newUser);

//Иммутабельное добавление нового элемента в обычный массив
// let usersArrayCopy = [...usersArray, newUser];

// Удаление элемента из обычного массива
usersArray = usersArray.filter(u => u.id !== newUser.id);