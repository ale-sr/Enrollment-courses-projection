import { API_BASE_URL, ACCESS_TOKEN } from "../constants/constants";
import axios from "axios";
import cookie from "react-cookies";

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + cookie.load(ACCESS_TOKEN),
  },
});
