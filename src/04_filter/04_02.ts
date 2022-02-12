import {CityType, GovernmentBuildingType} from "../02_objects/02_02";

export const demolishHousesOnTheStreet = (city: CityType, streetTitle: string) => {
  city.houses = city.houses.filter(h => h.address.street.title !== streetTitle);
};

export const getBuildingsWithStaffCountGreaterThan = (buildings: Array<GovernmentBuildingType>, staffCount: number) => {
  return buildings.filter(b => b.staffCount > staffCount);
};