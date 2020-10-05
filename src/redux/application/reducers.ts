/**
 * Map state updates for the application
 */
import {
  ApplicationActionTypes,
  ApplicationState,
  SET_FILTER,
  SET_PRODUCT,
} from "./types";

export const Application = (
  state: ApplicationState = {
    product: null,
    filter: "",
  },
  action: ApplicationActionTypes
) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        product: action.payload,
        filter: "",
      };
    case SET_FILTER:
      return {
        product: state.product,
        filter: action.payload,
      };
    default:
      return state;
  }
};
