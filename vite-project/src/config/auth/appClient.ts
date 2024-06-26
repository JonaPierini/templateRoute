import axios from "axios";

const appClient = axios.create({
  //   baseURL: import.meta.env.VITE_API_URL,
  baseURL: "API_URL",
  headers: {
    "Content-Type": "application/json",
  },
});

export { appClient };
