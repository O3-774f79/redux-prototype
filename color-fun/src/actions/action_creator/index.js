import axios from "axios";
import { changeColor } from "../action_constants";

export const loadColor = () => {
  return async dispatch => {
    const response = await axios.get("http://www.colr.org/json/color/random");
    dispatch(changeColor("#" + response.data.new_color));
  };
};
