type StreetType = {
  title: string
};

type AddressType = {
  number?: number
  street: StreetType
};

export type HouseType = {
  builtAt: number
  repaired: boolean
  address: AddressType
};

export type GovernmentBuildingType = {
  type: "HOSPITAL" | "FIRE-STATION"
  budget: number
  staffCount: number
  address: AddressType
};

export type CityType = {
  title: string
  houses: Array<HouseType>
  governmentBuildings: Array<GovernmentBuildingType>
  citizensNumber: number
};