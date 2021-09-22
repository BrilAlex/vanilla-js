import {
    addNewBookForUser,
    addNewBooksForUser,
    addNewCompany,
    makeHairstyle,
    moveUser,
    moveUserToAnotherHouse,
    removeBook,
    updateBookForUser,
    updateCompanyTitle,
    updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompaniesType
} from "./10_01";

let user: UserType;
let user2: UserWithLaptopType;
let user3: UserWithLaptopType & UserWithBooksType;
let user4: UserWithLaptopType & WithCompaniesType;

beforeEach(() => {
    user = {
        name: "Alex",
        hair: 34,
        address: {city: "Fanipol", street: "Mickevicha", houseNumber: 12},
    };
    user2 = {
        name: "Alex",
        hair: 34,
        address: {city: "Fanipol", street: "Mickevicha", houseNumber: 12},
        laptop: {brand: "Asus"}
    };
    user3 = {
        name: "Alex",
        hair: 34,
        address: {city: "Fanipol", street: "Mickevicha", houseNumber: 12},
        laptop: {brand: "Asus ROG"},
        books: ["HTML", "CSS", "JS"]
    };
    user4 = {
        name: "Alex",
        hair: 34,
        address: {city: "Fanipol", street: "Mickevicha", houseNumber: 12},
        laptop: {brand: "Asus"},
        companies: [{id: 1, title: "Epam"}, {id: 2, title: "IT-Incubator"}]
    }
});


test("Reference type test", () => {
    const awesomeUser = makeHairstyle(user, 2);

    user = awesomeUser;

    expect(user.hair).toBe(17);
    expect(awesomeUser.hair).toBe(17);
    expect(awesomeUser.address).toBe(user.address)
});

test("Change address", () => {
    const movedUser = moveUser(user2, "Minsk");

    expect(user2).not.toBe(movedUser);
    expect(user2.address).not.toBe(movedUser.address);
    expect(user2.laptop).toBe(movedUser.laptop);
    expect(user2.address.city).toBe("Fanipol");
    expect(movedUser.address.city).toBe("Minsk");
});

test("Upgrade users laptop", () => {
    const userWithNewLaptop = upgradeUserLaptop(user2, "Dell");

    expect(user2).not.toBe(userWithNewLaptop);
    expect(user2.address).toBe(userWithNewLaptop.address);
    expect(user2.laptop).not.toBe(userWithNewLaptop.laptop);
    expect(user2.laptop.brand).toBe("Asus");
    expect(userWithNewLaptop.laptop.brand).toBe("Dell");
});

test("Move user to another house", () => {
    const movedUser = moveUserToAnotherHouse(user3, 1);

    expect(user3).not.toBe(movedUser);
    expect(user3.address).not.toBe(movedUser.address);
    expect(user3.laptop).toBe(movedUser.laptop);
    expect(user3.books).toBe(movedUser.books);
    expect(user3.address.houseNumber).toBe(12);
    expect(movedUser.address.houseHumber).toBe(1);
});

test("Add new book for user", () => {
    const updatedUser = addNewBookForUser(user3, "React");

    expect(user3).not.toBe(updatedUser);
    expect(user3.address).toBe(updatedUser.address);
    expect(user3.laptop).toBe(updatedUser.laptop);
    expect(user3.books).not.toBe(updatedUser.books);
    expect(user3.books[3]).toBeUndefined();
    expect(user3.books.length).toBe(3);
    expect(updatedUser.books.length).toBe(4);
    expect(updatedUser.books[3]).toBe("React");
});

test("Add new books for user", () => {
    const userWithNewBooks = addNewBooksForUser(user3, ["React", "JavaScript"]);

    expect(user3).not.toBe(userWithNewBooks);
    expect(user3.address).toBe(userWithNewBooks.address);
    expect(user3.laptop).toBe(userWithNewBooks.laptop);
    expect(user3.books).not.toBe(userWithNewBooks.books);
    expect(user3.books[3]).toBeUndefined();
    expect(user3.books.length).toBe(3);
    expect(userWithNewBooks.books.length).toBe(5);
    expect(userWithNewBooks.books[3]).toBe("React");
    expect(userWithNewBooks.books[4]).toBe("JavaScript");
});

test("Update JS book to TS book", () => {
    const userWithNewBook = updateBookForUser(user3, "JS", "TypeScript");

    expect(user3).not.toBe(userWithNewBook);
    expect(user3.address).toBe(userWithNewBook.address);
    expect(user3.laptop).toBe(userWithNewBook.laptop);
    expect(user3.books).not.toBe(userWithNewBook.books);
    expect(userWithNewBook.books.length).toBe(3);
    expect(userWithNewBook.books[2]).toBe("TypeScript");
});

test("Remove CSS book", () => {
    const updatedUser = removeBook(user3, "CSS");

    expect(user3).not.toBe(updatedUser);
    expect(user3.address).toBe(updatedUser.address);
    expect(user3.laptop).toBe(updatedUser.laptop);
    expect(user3.books).not.toBe(updatedUser.books);
    expect(updatedUser.books.length).toBe(2);
    expect(updatedUser.books[1]).toBe("JS");
});

test("Add new company to User", () => {
    const updatedUser = addNewCompany(user4, "Itransition");

    expect(user4).not.toBe(updatedUser);
    expect(user4.address).toBe(updatedUser.address);
    expect(user4.laptop).toBe(updatedUser.laptop);
    expect(user4.companies).not.toBe(updatedUser.companies);
    expect(user4.companies.length).toBe(2);
    expect(updatedUser.companies.length).toBe(3);
    expect(updatedUser.companies[2].title).toBe("Itransition");
});

test("Update company title", () => {
    const updatedUser = updateCompanyTitle(user4, 2,"Google") as UserWithLaptopType & WithCompaniesType;

    expect(user4).not.toBe(updatedUser);
    expect(user4.address).toBe(updatedUser.address);
    expect(user4.laptop).toBe(updatedUser.laptop);
    expect(user4.companies).not.toBe(updatedUser.companies);
    expect(user4.companies.length).toBe(2);
    expect(updatedUser.companies.length).toBe(2);
    expect(updatedUser.companies[1].title).toBe("Google");
});

test("Update company title Associative Array", () => {
    let companies = {
        "Alex": [{id: 1, title: "EPAM"}, {id: 2, title: "IT-Incubator"}],
        "Dimych": [{id: 1, title: "EPAM"}, {id: 2, title: "IT-Incubator"}, {id: 3, title: "Google"}]
    }

    let companiesCopy = updateCompanyTitle2(companies, "Alex", 2, "Itransition");

    expect(companiesCopy["Alex"]).not.toBe(companies["Alex"]);
    expect(companiesCopy["Dimych"]).toBe(companies["Dimych"]);
    expect(companiesCopy["Alex"][1].title).toBe("Itransition");
});