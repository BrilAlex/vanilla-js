import {CityType, GovernmentBuildingType} from "../02-objects/02_02";

export const demolishHousesOnTheStreet = (cityName: CityType, streetName: string) => {
    cityName.houses = cityName.houses.filter(h => h.address.street.title !== streetName);
}

export const getBuildingsWithStaffCountGreaterThan = (govBuildings: Array<GovernmentBuildingType>, staffCount: number) => {
    return govBuildings.filter(building => building.staffCount > staffCount);
}