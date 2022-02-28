import addresses from "../constants/contracts"

export const getAddress = (address: string): string => {
    return  address;
  }
  
  export const geteTYBondAddress = () => {
    return getAddress(addresses.eTYBond)
  }