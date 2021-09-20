export type UserType = {
    name: string
    age: number
    address: {city: string}
}

export function increaseAge(person: UserType) {
    person.age++;
}