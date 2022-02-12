export type ManType = {
  name: string
  age: number
};

const people: Array<ManType> = [
  {name: "Andrei Ivanov", age: 33},
  {name: "Alexander Petrov", age: 24},
  {name: "Dmitri Sidorov", age: 18},
];

const transformToDev = (man: ManType) => {
  return {
    stack: ["html", "css", "js", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
  };
};

let dev1 = [
  {
    stack: ["html", "css", "js", "react"],
    firstName: "Andrei",
    lastName: "Ivanov",
  },
  {
    stack: ["html", "css", "js", "react"],
    firstName: "Alexander",
    lastName: "Petrov",
  },
  {
    stack: ["html", "css", "js", "react"],
    firstName: "Dmitri",
    lastName: "Sidorov",
  },
];

let dev2 = [
  transformToDev(people[0]),
  transformToDev(people[1]),
  transformToDev(people[2]),
];

let dev3 = people.map(transformToDev);

let dev4 = people.map(man => ({
  stack: ["html", "css", "js", "react"],
  firstName: man.name.split(" ")[0],
  lastName: man.name.split(" ")[1],
}));

const messages = people.map(man => `Hello, ${man.name.split(" ")[0]}! Welcome to IT-Incubator.`);

export const createGreetingMessages = (people: Array<ManType>) => {
  return people.map(man => `Hello, ${man.name.split(" ")[0]}! Welcome to IT-Incubator.`);
};