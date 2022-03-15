import {
  addCompanyForUser, addNewBookForUser,
  addNewBooksForUser, CompaniesType,
  makeHairstyle,
  moveUser,
  moveUserToAnotherHouse, removeUserBook, updateUserBook, updateUserCompany, updateUserCompanyAlt,
  upgradeUserLaptop,
  UserType, UserWithBooksType, UserWithCompaniesType,
  UserWithLaptopType
} from "./10";

let user: UserType;
let user2: UserWithLaptopType;
let user3: UserWithLaptopType & UserWithBooksType;
let user4: UserWithLaptopType & UserWithCompaniesType;

beforeEach(() => {
  user = {
    name: "Alex",
    hairLength: 30,
    address: {
      city: "Fanipol",
      street: "Mickevicha",
      house: 12,
    },
  };

  user2 = {
    name: "Alex",
    hairLength: 30,
    address: {
      city: "Fanipol",
      street: "Mickevicha",
      house: 12,
    },
    laptop: {
      brand: "Asus ROG",
    },
  };

  user3 = {
    name: "Alex",
    hairLength: 30,
    address: {
      city: "Fanipol",
      street: "Mickevicha",
      house: 12,
    },
    laptop: {
      brand: "Asus ROG"
    },
    books: ["html", "css", "js", "react"],
  };

  user4 = {
    name: "Alex",
    hairLength: 30,
    address: {
      city: "Fanipol",
      street: "Mickevicha",
      house: 12,
    },
    laptop: {
      brand: "Asus ROG"
    },
    companies: [{id: 1, title: "Epam"}, {id: 2, title: "IT-Incubator"}],
  };
});

test("makeHairstyle function test", () => {
  const awesomeUser = makeHairstyle(user, 2);

  expect(user.hairLength).toBe(30);
  expect(awesomeUser.hairLength).toBe(15);
  expect(awesomeUser.address).toBe(user.address);
});

test("moveUser function test", () => {
  const movedUser = moveUser(user2, "London");

  expect(user2).not.toBe(movedUser);
  expect(user2.address).not.toBe(movedUser.address);
  expect(user2.laptop).toBe(movedUser.laptop);
  expect(user2.address.city).toBe("Fanipol");
  expect(movedUser.address.city).toBe("London");
});

test("upgradeLaptop function test", () => {
  const userWithNewLaptop = upgradeUserLaptop(user2, "Asus TUF");

  expect(user2).not.toBe(userWithNewLaptop);
  expect(user2.address).toBe(userWithNewLaptop.address);
  expect(user2.laptop).not.toBe(userWithNewLaptop.laptop);
  expect(user2.laptop.brand).toBe("Asus ROG");
  expect(userWithNewLaptop.laptop.brand).toBe("Asus TUF");
});

test("moveUserToOtherHouse function test", () => {
  const userWithNewHouseCopy = moveUserToAnotherHouse(user3, 99);

  expect(user3).not.toBe(userWithNewHouseCopy);
  expect(user3.books).toBe(userWithNewHouseCopy.books);
  expect(user3.laptop).toBe(userWithNewHouseCopy.laptop);
  expect(user3.address).not.toBe(userWithNewHouseCopy.address);
  expect(user3.address.house).toBe(12);
  expect(userWithNewHouseCopy.address.house).toBe(99);
});

test("addNewBookForUser function test", () => {
  const userCopy = addNewBookForUser(user3, "ts");

  expect(user3).not.toBe(userCopy);
  expect(user3.laptop).toBe(userCopy.laptop);
  expect(user3.address).toBe(userCopy.address);
  expect(user3.books).not.toBe(userCopy.books);
  expect(user3.books.length).toBe(4);
  expect(userCopy.books.length).toBe(5);
  expect(userCopy.books[4]).toBe("ts");
});

test("addNewBooksForUser function test", () => {
  const userCopy = addNewBooksForUser(user3, ["ts", "rest api"]);

  expect(user3).not.toBe(userCopy);
  expect(user3.laptop).toBe(userCopy.laptop);
  expect(user3.address).toBe(userCopy.address);
  expect(user3.books).not.toBe(userCopy.books);
  expect(user3.books.length).toBe(4);
  expect(userCopy.books.length).toBe(6);
  expect(userCopy.books[4]).toBe("ts");
  expect(userCopy.books[5]).toBe("rest api");
});

test("updateUserBook function test", () => {
  const userWithUpdatedBooks = updateUserBook(user3, "js", "ts");

  expect(user3).not.toBe(userWithUpdatedBooks);
  expect(user3.laptop).toBe(userWithUpdatedBooks.laptop);
  expect(user3.address).toBe(userWithUpdatedBooks.address);
  expect(user3.books).not.toBe(userWithUpdatedBooks.books);
  expect(user3.books.length).toBe(4);
  expect(userWithUpdatedBooks.books.length).toBe(4);
  expect(user3.books[2]).toBe("js");
  expect(userWithUpdatedBooks.books[2]).toBe("ts");
});

test("removeUserBook function test", () => {
  const userWithFilteredBooks = removeUserBook(user3, "js");

  expect(user3).not.toBe(userWithFilteredBooks);
  expect(user3.laptop).toBe(userWithFilteredBooks.laptop);
  expect(user3.address).toBe(userWithFilteredBooks.address);
  expect(user3.books).not.toBe(userWithFilteredBooks.books);
  expect(user3.books.length).toBe(4);
  expect(userWithFilteredBooks.books.length).toBe(3);
  expect(user3.books[2]).toBe("js");
  expect(userWithFilteredBooks.books[2]).toBe("react");
});

test("addCompanyForUser function test", () => {
  const userCopy = addCompanyForUser(user4, "Google");

  expect(user4).not.toBe(userCopy);
  expect(user4.laptop).toBe(userCopy.laptop);
  expect(user4.address).toBe(userCopy.address);
  expect(user4.companies).not.toBe(userCopy.companies);
  expect(user4.companies.length).toBe(2);
  expect(userCopy.companies.length).toBe(3);
  expect(userCopy.companies[2].title).toBe("Google");

});

test("updateUserCompany function test", () => {
  const userCopy = updateUserCompany(user4, 1, "EPAM") as UserWithLaptopType & UserWithCompaniesType;

  expect(user4).not.toBe(userCopy);
  expect(user4.laptop).toBe(userCopy.laptop);
  expect(user4.address).toBe(userCopy.address);
  expect(user4.companies).not.toBe(userCopy.companies);
  expect(user4.companies.length).toBe(2);
  expect(userCopy.companies.length).toBe(2);
  expect(userCopy.companies[0].title).toBe("EPAM");

});

test("updateUserCompany Alt function test", () => {
  const companies: CompaniesType = {
    "Dimych": [{id: 1, title: "Epam"}, {id: 2, title: "IT-Incubator"}],
    "Alex": [{id: 2, title: "IT-Incubator"}],
  };

  const companiesCopy = updateUserCompanyAlt(companies, "Dimych", 1, "EPAM");

  expect(companies).not.toBe(companiesCopy);
  expect(companies["Dimych"]).not.toBe(companiesCopy["Dimych"]);
  expect(companies["Alex"]).toBe(companiesCopy["Alex"]);
  expect(companies["Dimych"][0].title).toBe("Epam");
  expect(companiesCopy["Dimych"][0].title).toBe("EPAM");
});