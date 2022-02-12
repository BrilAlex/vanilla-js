import {CityType} from "../02_objects/02_02";
import {
  createMessageForStreets,
  getStreetTitlesOfGovernmentBuildings,
  getStreetTitlesOfHouses
} from "./05_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        id: 1,
        builtAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {title: "White street"}
        }
      },
      {
        id: 2,
        builtAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {title: "Happy street"}
        }
      },
      {
        id: 3,
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

// Создайте функции, чтобы тесты прошли
test("Should get list of street titles for government buildings", () => {
  let streets = getStreetTitlesOfGovernmentBuildings(city.governmentBuildings);

  expect(streets.length).toBe(2);
  expect(streets[0]).toBe("Central Str");
  expect(streets[1]).toBe("South Str");
});

test("Should get list of street titles for houses", () => {
  let streets = getStreetTitlesOfHouses(city.houses);

  expect(streets.length).toBe(3);
  expect(streets[0]).toBe("White street");
  expect(streets[1]).toBe("Happy street");
  expect(streets[2]).toBe("Happy street");
});

test("Should crete greeting messages for each street", () => {
  let messages = createMessageForStreets(city.houses);

  expect(messages[0]).toBe("Hello guys from White street");
  expect(messages[1]).toBe("Hello guys from Happy street");
  expect(messages[2]).toBe("Hello guys from Happy street");
});