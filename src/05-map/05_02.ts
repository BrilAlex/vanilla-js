import {CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export const getStreetTitlesOfGovernmentBuildings = (govBuildings: Array<GovernmentBuildingType>) => {
    return govBuildings.map(building => building.address.street.title);
}

export function getStreettitlesOgHouses(houses: Array<HouseType>) {
    return houses.map(house => house.address.street.title);
}

export const createStreetGreetingMessage = (houses: HouseType[]) => {
    return houses.map(h => `Hello, ${h.address.street.title}! Vote for mayor!`);
}