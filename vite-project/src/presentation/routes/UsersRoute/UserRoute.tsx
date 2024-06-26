import { Navigate, Route } from "react-router-dom";
import { Users } from "./def";
import { StepOne } from "../../pages/Users/StepOne";
import { StepTwo } from "../../pages/Users/StepTwo";
import { StepThree } from "../../pages/Users/StepThree";

export const UsersNavigation = (
  <>
    <Route index element={<Navigate to={Users.StepOne} replace />} />
    <Route path={Users.StepOne} element={<StepOne />} />
    <Route path={Users.StepTwo} element={<StepTwo />} />
    <Route path={Users.StepThree} element={<StepThree />} />
  </>
);
