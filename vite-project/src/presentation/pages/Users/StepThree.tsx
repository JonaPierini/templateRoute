import { useNavigate } from "../../components/Hooks/useNavigation";

export const StepThree = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>StepThree</div>
      <div>
        <button onClick={() => navigate(-1)}>volver</button>
      </div>
    </>
  );
};
