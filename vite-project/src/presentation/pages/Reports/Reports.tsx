import { useAuthStore } from "../../../store/auth/authStore";

export const Reports = () => {
  const { logOut, status, user } = useAuthStore();
  console.log(status);

  return (
    <div>
      <h1>Reports - Hola {user}</h1>
      <button onClick={logOut}>Cerrar sesion</button>
    </div>
  );
};
