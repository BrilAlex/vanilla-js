export type ManType = {
    name: string,
    age: number
}

const people: Array<ManType> = [
    {name: "Alex Brilevski", age: 34},
    {name: "Pavel Lebedev", age: 30},
    {name: "Alexander Ivanov", age: 25},
    {name: "Dmitry Petrov", age: 18}
];

const dimychTransformator = (man: ManType) => {
    return {
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1],
        stack: ["html", "css", "js", "tdd", "react"]
    }
}

const dev = [
    {firstName: "Alex", lastName: "Brilevski", stack: ["html", "css", "js", "tdd", "react"]},
    {firstName: "Pavel", lastName: "Lebedev", stack: ["html", "css", "js", "tdd", "react"]},
    {firstName: "Alexander", lastName: "Ivanov", stack: ["html", "css", "js", "tdd", "react"]},
    {firstName: "Dmitry", lastName: "Petrov", stack: ["html", "css", "js", "tdd", "react"]}
];


const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
    dimychTransformator(people[3])
];

const dev3 = people.map(dimychTransformator);
const dev4 = people.map(man => ({
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
    stack: ["html", "css", "js", "tdd", "react"]
}));

let greetings = people.map(man => "Hello, " + man.name.split(" ")[0] + "! Welcome to IT-Incubator!");

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello, ${man.name.split(" ")[0]}! Welcome to IT-Incubator!`)
};