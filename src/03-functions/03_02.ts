import {CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export const addMoneyToBudget = (govBuilding: GovernmentBuildingType, sumValue: number) => {
    govBuilding.budget += sumValue;
}

export const demolishHousesOnTheStreet = (cityName: CityType, streetName: string) => {
    cityName.houses = cityName.houses.filter(h => h.address.street.title !== streetName);
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const fireStaff = (govBuilding: GovernmentBuildingType, staffCountToFire: number) => {
    govBuilding.staffCount -= staffCountToFire;
}

export const hireStaff = (govBuilding: GovernmentBuildingType, staffCountToHire: number) => govBuilding.staffCount += staffCountToHire;

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens! I want you to be happy. All ${city.citizensNumber} men.`;
    //return "Hello " + city.title + " citizens! I want you to be happy. All " + city.citizensNumber + " men.";
}