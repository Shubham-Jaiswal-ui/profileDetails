import { DATA_REQUEST, INDIVIDUAL_DATA_SUCCESS } from "../../constant/constant";

export const dataLoaderAction = () => {
  return { type: DATA_REQUEST };
};
export const individualProfileAction = (data) => {
 
  return { type: INDIVIDUAL_DATA_SUCCESS, data: data };
};
