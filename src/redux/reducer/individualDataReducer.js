import { INDIVIDUAL_DATA_SUCCESS } from "../../constant/constant";

const initialState = {
  individualDataSuccess: {},
  individualDataError: false,
  individualDataLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INDIVIDUAL_DATA_SUCCESS:
      return {
        individualDataLoading: false,
        individualDataSuccess: action.data,
        individualDataError: false,
      };
    default:
      return state;
  }
};
