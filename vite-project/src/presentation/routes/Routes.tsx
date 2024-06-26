import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootRoutes } from "./def";
import { Login } from "../pages/Login/Login";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Reports } from "../pages/Reports/Reports";
import { UsersNavigation } from "./UsersRoute/UserRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Login - unAuthorized */}
      <Route path={RootRoutes.Login} element={<Login />} />
      {/* Protected Route - Authorized */}
      <Route element={<ProtectedRoute />}>
        <Route
          index
          path="*"
          element={<Navigate to={RootRoutes.Reports} replace />}
        />
        <Route path={RootRoutes.Reports} element={<Reports />} />
        <Route path={RootRoutes.Users}>{UsersNavigation}</Route>
      </Route>
    </>
  )
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
