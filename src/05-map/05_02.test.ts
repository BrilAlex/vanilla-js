import {CityType} from "../02-objects/02_02";
import {createStreetGreetingMessage, getStreetTitlesOfGovernmentBuildings, getStreettitlesOgHouses} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
            {id: 2, buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
            {id: 3, buildedAt: 2020, repaired: false, address: {number: 101, street: {title: "Happy street"}}}
        ],
        governmentBuildings: [
            {type: "HOSPITAL", budget: 200000, staffCount: 200, address: {number: 102, street: {title: "Central Str"}}},
            {type: "FIRE-STATION", budget: 500000, staffCount: 1000, address: {number: 110, street: {title: "South Str"}}}
        ],
        citizensNumber: 10000000
    }
});


// 01 Создайте в том же фале еще одну функцию, чтобы тесты прошли
test("Should get list of Street titles of government buildings", () => {
    let govStreetNames = getStreetTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(govStreetNames.length).toBe(2);
    expect(govStreetNames[0]).toBe("Central Str");
    expect(govStreetNames[1]).toBe("South Str");
});

// 02 Создайте в том же фале еще одну функцию, чтобы тесты прошли
test("Should get list of street titles of houses", () => {
    let houseStreetNames = getStreettitlesOgHouses(city.houses);

    expect(houseStreetNames.length).toBe(3);
    expect(houseStreetNames[0]).toBe("White street");
    expect(houseStreetNames[1]).toBe("Happy street");
    expect(houseStreetNames[2]).toBe("Happy street");
});

// 03 Создайте в том же фале еще одну функцию, чтобы тесты прошли
test("Should create greeting messages for each street title", () => {
    let messages = createStreetGreetingMessage(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello, White street! Vote for mayor!");
    expect(messages[1]).toBe("Hello, Happy street! Vote for mayor!");
    expect(messages[2]).toBe("Hello, Happy street! Vote for mayor!");
});