import {CityType, GovernmentBuildingType, HouseType} from "../02_objects/02_02";

export const addBudget = (building: GovernmentBuildingType, sum: number) => {
  building.budget += sum;
};

export const repairHouse = (house: HouseType) => {
  house.repaired = true;
};

export const fireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
  building.staffCount -= staffCountToFire;
};

export const hireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
  building.staffCount += staffCountToHire;
};

export const createMessage = function (city: CityType) {
  return `Hello ${city.title} citizens! I want you to be happy. All ${city.citizensNumber} people.`;
};