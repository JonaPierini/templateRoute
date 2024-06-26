import { useAuthStore } from "../../../store/auth/authStore";

export const Reports = () => {
  const { logOut, status, user, token } = useAuthStore();
  console.log(status);

  return (
    <div>
      <h1>
        Reports - Hola {user} - token {token}
      </h1>
      <button onClick={logOut}>Cerrar sesion</button>
    </div>
  );
};
