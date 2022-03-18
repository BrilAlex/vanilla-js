export type UserType = {
  name: string
  hairLength: number
  address: { city: string, street: string, house?: number }
};

type LaptopType = {
  brand: string
};

export type UserWithLaptopType = UserType & { laptop: LaptopType };

export type UserWithBooksType = UserType & { books: Array<string> };

export type UserWithSkillsType = UserType & { skillsLevel: Array<number> }

type CompanyType = {
  id: number
  title: string
};

export type UserWithCompaniesType = { companies: Array<CompanyType> };

export type CompaniesType = { [userName: string]: Array<CompanyType> };

export function makeHairstyle(u: UserType, trimLength: number) {
  // Mutable changes
  // u.hairLength = u.hairLength / trimLength;

  // Immutable changes
  // const userCopy = {...u};
  // userCopy.hairLength = u.hairLength / trimLength;
  // return userCopy;

  return {...u, hairLength: u.hairLength / trimLength};
}

export function moveUser(user: UserWithLaptopType, city: string) {
  // const userCopy = {...user};
  // userCopy.address = {...user.address, city};
  // return userCopy;

  return {...user, address: {...user.address, city}};
}

export function upgradeUserLaptop(user: UserWithLaptopType, newLaptop: string) {
  return {...user, laptop: {...user.laptop, brand: newLaptop}};
}

export function moveUserToAnotherHouse(user: UserWithLaptopType & UserWithBooksType, newHouse: number) {
  return {...user, address: {...user.address, house: newHouse}}
}

export function addNewBookForUser(user: UserWithLaptopType & UserWithBooksType, newBook: string) {
  // return {...user, books: user.books.concat(newBooks)};

  return {...user, books: [...user.books, newBook]};
}

export function addNewBooksForUser(user: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
  // return {...user, books: user.books.concat(newBooks)};

  return {...user, books: [...user.books, ...newBooks]};
}

export function updateUserBook(user: UserWithLaptopType & UserWithBooksType, oldTitle: string, newTitle: string) {
  return {...user, books: user.books.map(b => b === oldTitle ? newTitle : b)};
}

export function removeUserBook(user: UserWithLaptopType & UserWithBooksType, bookTitle: string) {
  return {...user, books: user.books.filter(b => b !== bookTitle)};
}

export function addCompanyForUser(user: UserWithLaptopType & UserWithCompaniesType, newCompany: string) {
  return {...user, companies: [...user.companies, {id: 3, title: newCompany}]};
}

export function updateUserCompany(user: UserWithCompaniesType, company_ID: number, newTitle: string) {
  // return {
  //   ...user,
  //   companies: user.companies.map(c => c.id === company_ID ? {...c, title: newTitle} : c)
  // };

  let copy: UserWithCompaniesType = {
    ...user,
    companies: user.companies.map(c => c.id === company_ID ? {...c, title: newTitle} : c),
  };
  return copy;
}

export function updateUserCompanyAlt(companies: CompaniesType, userName: string, company_ID: number, newTitle: string) {
  return {
    ...companies,
    [userName]: companies[userName].map(c => c.id === company_ID ? {...c, title: newTitle} : c)
  };
}

export function updateUserSkill(user: UserWithSkillsType, oldLevel: number, newLevel: number) {
  return {...user, skillsLevel: user.skillsLevel.map(sl => sl === oldLevel ? newLevel : sl)};
}