import { useNavigate } from "../../components/Hooks/useNavigation";
import { Users } from "../../routes/UsersRoute/def";
import { RootRoutes } from "../../routes/def";

export const StepOne = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>StepOne</h1>
      <button onClick={() => navigate([RootRoutes.Users, Users.StepTwo])}>
        Ir al dos
      </button>
    </div>
  );
};
