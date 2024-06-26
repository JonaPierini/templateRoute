import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AuthStatus = "loggedIn" | "unAuthorized";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: string;
  login: (token: string, user: string) => Promise<boolean>;
  logOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      status: "unAuthorized",
      token: undefined,
      user: undefined,

      login: async (token: string, user) => {
        set({ status: "loggedIn", token: token, user: user });

        return true;
      },

      logOut: async () => {
        set({ status: "unAuthorized", token: undefined, user: undefined });
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
