import { SAVE_HOTEL } from "./types";
import store from "../store";

export const saveToFavoriteList = (item) => {
  console.log("action fired");
  store.dispatch({
    type: SAVE_HOTEL,
    payload: item,
  });
};
