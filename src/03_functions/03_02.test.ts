import {CityType} from "../02_objects/02_02";
import {
  addBudget,
  createMessage,
  fireStaff,
  hireStaff,
  repairHouse
} from "./03_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        builtAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {title: "White street"}
        }
      },
      {
        builtAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {title: "Happy street"}
        }
      },
      {
        builtAt: 2020,
        repaired: false,
        address: {
          number: 101,
          street: {title: "Happy street"}
        }
      }
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {
          street: {title: "Central Str"}
        }
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {title: "South Str"}
        }
      }
    ],
    citizensNumber: 10000000
  }
});

// Создайте в отдельном файле функции, чтобы тесты прошли
test("Budget should be changed for HOSPITAL", () => {
  addBudget(city.governmentBuildings[0], 100000);

  expect(city.governmentBuildings[0].budget).toBe(300000);
});

test("Budget should be changed for FIRE-STATION", () => {
  addBudget(city.governmentBuildings[1], -100000);

  expect(city.governmentBuildings[1].budget).toBe(400000);
});

test("House should be repaired", () => {
  repairHouse(city.houses[1]);

  expect(city.houses[1].repaired).toBeTruthy();
});

test("Staff should be decreased", () => {
  fireStaff(city.governmentBuildings[0], 20);

  expect(city.governmentBuildings[0].staffCount).toBe(180);
});

test("Staff should be increased", () => {
  hireStaff(city.governmentBuildings[0], 100);
  hireStaff(city.governmentBuildings[1], 50);

  expect(city.governmentBuildings[0].staffCount).toBe(300);
  expect(city.governmentBuildings[1].staffCount).toBe(1050);
});

test("Message should be correct", () => {
  expect(createMessage(city)).toBe("Hello New York citizens! I want you to be happy. All 10000000 people.");
});