type CityType = {
  title: string
  countryTitle: string
}

type AddressType = {
  streetTitle: string
  city: CityType
}

type TechType = {
  id: number
  title: string
}

export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechType>
}

export const student: StudentType = {
  id: 1,
  name: "Alex",
  age: 34,
  isActive: false,
  address: {
    streetTitle: "Mickevicha 12",
    city: {
      title: "Fanipol",
      countryTitle: "Belarus"
    }
  },
  technologies: [
    {id: 1, title: "HTML"},
    {id: 2, title: "CSS"},
    {id: 3, title: "React"}
  ]
}

console.log(student.name);
console.log(student.age);
console.log(student.address.city.title);
console.log(student.technologies[2].title);