import { Navigate } from "react-router-dom";
import { RootRoutes } from "../def";
import { Layout } from "../../components/Layout/Layout";
import { useAuthStore } from "../../../store/auth/authStore";
import { onIdTokenChanged, auth } from "../../../firebase/firebase";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const { status, logOut } = useAuthStore();
  const handleTokenChange = () => {
    if (status === "loggedIn") {
      onIdTokenChanged(auth, async (user) => {
        if (!user) {
          logOut();
          console.log("El usuario ha sido deslogueado - closeeSession");
        } else {
          try {
            const token = await user.getIdToken();
            console.log("Token de usuario actualizado:", token);
          } catch (error) {
            console.error("Error al obtener el token:", error);
            logOut();
          }
        }
      });
    }
  };

  useEffect(() => {
    handleTokenChange();
  }, []);

  if (status === "unAuthorized") {
    return <Navigate to={RootRoutes.Login} />;
  }

  return <Layout />;
};
