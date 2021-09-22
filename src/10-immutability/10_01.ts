type LaptopType = {
    brand: string
}

export type UserType = {
    name: string
    hair: number
    address: {city: string, street: string, houseNumber: number}
}

export type UserWithLaptopType = UserType & {laptop: LaptopType}
export type UserWithBooksType = UserType & {books: string[]}
export type WithCompaniesType = {companies: Array<{id: number, title: string}>}
export type CompaniesType = {[key: string]: Array<{id: number, title: string}>}

export function makeHairstyle(u: UserType, haircutLength : number) {
    const copy = {...u, hair: u.hair/haircutLength};

    return copy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city: city}};

    /*const copy = {...u};
    copy.address = {...u.address, city: city};
    return copy;*/
}

export function upgradeUserLaptop (u: UserWithLaptopType, newLaptop: string) {
    return {...u, laptop: {...u.laptop, brand: newLaptop}};
}

export function moveUserToAnotherHouse(
    u: UserWithLaptopType & UserWithBooksType, houseHumber: number
) { return {...u, address: {...u.address, houseHumber}}}

export function addNewBookForUser (
    u: UserWithLaptopType & UserWithBooksType, newBook: string
) {
    return {...u, books: [...u.books, newBook]}
}

export function addNewBooksForUser (
    u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>
) {
    return {...u, books: u.books.concat(newBooks)};
}

export const updateBookForUser = (
    u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string
) => ({...u, books: u.books.map(book => book === oldBook ? newBook : book)});

export const removeBook = (
    u: UserWithLaptopType & UserWithBooksType, bookToRemove: string
) => ({...u, books: u.books.filter(book => book !== bookToRemove)});

export const addNewCompany = (
    u: UserWithLaptopType & WithCompaniesType, newCompany: string
) => (
    {...u, companies: [...u.companies, {id: 3, title: newCompany}]}
);

export const updateCompanyTitle = (
    u: WithCompaniesType, company_ID: number, companyTitle: string
) => (
    {...u, companies: u.companies.map(c =>
            c.id === company_ID ? {...c, title: companyTitle} : c)}
);

export const updateCompanyTitle2 = (
    companies: CompaniesType,
    user_ID: string,
    company_ID: number,
    title: string
) => (
    {...companies, [user_ID]: companies[user_ID].map(c =>
            c.id === company_ID ? {...c, title} : c)}
);