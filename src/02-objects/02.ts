export type LocalCityType = {
    title: string,
    countryTitle: string
}

type AddressType = {
    streetTitle: string,
    city: LocalCityType
}

type TechnologyType = {
    id: number,
    title: string
}

export type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechnologyType>
}

export const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "React"}
    ]
}

const school = {
    name: "It-Incubator.by",
    isOpen: true,
    mentors: ["Igor", "Viktor"]
}

console.log(student.name);
console.log(student.age);
console.log(student.address.city.title);
console.log(student.technologies[2].title);