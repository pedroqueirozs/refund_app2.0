import axios from "axios";
export const api = axios.create({
  baseURL: "postgresql://refund_user:mbJgnlTF5Ht6rp79IlYKHuppOxZugGKM@dpg-d28nc8ruibrs73dnkje0-a.oregon-postgres.render.com/refund",
});
