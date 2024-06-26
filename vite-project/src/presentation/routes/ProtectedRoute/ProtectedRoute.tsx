import { Navigate } from "react-router-dom";
import { RootRoutes } from "../def";
import { Layout } from "../../components/Layout/Layout";
import { useAuthStore } from "../../../store/auth/authStore";

export const ProtectedRoute = () => {
  const { status } = useAuthStore();
  if (status === "unAuthorized") {
    return <Navigate to={RootRoutes.Login} />;
  }

  return <Layout />;
};
