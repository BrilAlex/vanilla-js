import {CityType} from "../02-objects/02_02";
import {addMoneyToBudget, createMessage, demolishHousesOnTheStreet, fireStaff, hireStaff, repairHouse} from "./03_02";

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

// 01 Создайте в отдельном файле функцию, чтобы тесты прошли
test("Budget should be changed for Hostital", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});

test("Budget should be changed for Fire-Station", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
});

// 01 дополните тип HouseType (добавьте порядковый номер id от 1 и до возрастанию)
// 02 Создайте в том же фале еще одну функцию, чтобы тесты прошли
test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street");
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
});

// 03 Создайте в том же фале еще одну функцию, чтобы тесты прошли
test("House should be repaired", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})

// 04 Создайте в том же фале еще одну функцию, чтобы тесты прошли
test("Staff should be decreased", () => {
    fireStaff(city.governmentBuildings[1], 200);
    expect(city.governmentBuildings[1].staffCount).toBe(800);
})

// 05 Создайте в том же фале еще одну функцию, чтобы тесты прошли
test("Staff should be increased", () => {
    hireStaff(city.governmentBuildings[0], 100);
    hireStaff(city.governmentBuildings[1], 50);
    expect(city.governmentBuildings[0].staffCount).toBe(300);
    expect(city.governmentBuildings[1].staffCount).toBe(1050);
})

// 06 Создайте в том же фале еще одну функцию, чтобы тесты прошли
test("Message should be correct", () => {
    expect(createMessage(city)).toBe("Hello New York citizens! I want you to be happy. All 10000000 men.");
})