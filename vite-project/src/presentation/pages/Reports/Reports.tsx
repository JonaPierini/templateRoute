import { useState } from "react";
import { useAuthStore } from "../../../store/auth/authStore";
import { Loader } from "../../components/Loader/Loader";

export const Reports = () => {
  const { logOut, email } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const onCloseSession = () => {
    setLoading(true);
    setTimeout(() => {
      logOut();
      setLoading(false);
    }, 1000);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Reports - Hola {email}</h1>
      <button onClick={onCloseSession}>Cerrar sesion</button>
    </div>
  );
};
