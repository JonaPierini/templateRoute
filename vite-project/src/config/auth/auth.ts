import { appClient } from "./appClient";

export const authLogin = async (token: string) => {
  try {
    const response = await appClient.get("/auth/checkAuth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
