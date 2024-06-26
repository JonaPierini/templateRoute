import { useNavigate } from "../../components/Hooks/useNavigation";
import { Users } from "../../routes/UsersRoute/def";
import { RootRoutes } from "../../routes/def";

export const StepTwo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>StepTwo</h1>
      <div>
        <button onClick={() => navigate([RootRoutes.Users, Users.StepThree])}>
          Ir al 3
        </button>
      </div>

      <div>
        <button onClick={() => navigate(-1)}>volver</button>
      </div>
    </div>
  );
};
