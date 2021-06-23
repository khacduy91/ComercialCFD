import Api from "../core/Api";
import { domain } from "./config";

export default {
  login: (form) => {
    return Api.post("login", form);
  },
  register: (form) => {
    return Api.post("register", form);
  },
};
