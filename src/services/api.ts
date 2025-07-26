import axios from "axios";
//Axios é uma biblioteca para consumir apis.

export const api = axios.create({
  baseURL: "http://localhost:3333",
});
