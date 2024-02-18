import axios from "axios";

//TODO - start usigin rewrites to deploy
export const api = axios.create({
  baseURL: "http://localhost:3005/api/v1",
});
