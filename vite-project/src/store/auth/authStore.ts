import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AuthStatus = "loggedIn" | "unAuthorized";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  email?: string;
  login: (token: string, email: string) => Promise<boolean>;
  logOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      status: "unAuthorized",
      token: undefined,
      email: undefined,

      login: async (token: string, email: string) => {
        set({ status: "loggedIn", token: token, email: email });

        return true;
      },

      logOut: async () => {
        set({ status: "unAuthorized", token: undefined, email: undefined });
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
