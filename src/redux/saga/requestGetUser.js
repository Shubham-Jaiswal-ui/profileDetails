import axios from "axios";
const URL = "https://randomuser.me/api/?results=50";

export const requestGetUser = () => {
  return axios
    .get(URL)
    .then((response) => response.data)
    .catch((error) => error.message);
};
