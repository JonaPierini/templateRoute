import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../../store/auth/authStore";
import { RootRoutes } from "../../routes/def";
import {
  auth,
  googleProvider,
  signInWithPopup,
} from "../../../firebase/firebase";
import { useState } from "react";
import { Loader } from "../../components/Loader/Loader";

// import "./Login.css";

export const Login = () => {
  const { status, login } = useAuthStore();
  const [loading, setLoading] = useState(false);

  if (status === "loggedIn") {
    return <Navigate to={RootRoutes.Reports} replace />;
  }

  const handleRedirectResult = async (result: any) => {
    try {
      if (result && result.user) {
        const token = await result.user.getIdToken();
        const user = await result.user.email;
        if (token && user) {
          login(token, user);
        }
      }
    } catch (error) {
      console.error("Error handling redirect result:", error);
    } finally {
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      handleRedirectResult(result);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="background-login">
      <div className="buttonLogin">
        <div style={{ position: "absolute", top: 20, left: 20 }}>
          <img
            style={{ width: "20%", height: "20%" }}
            src="/icasaLogo.png"
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <img className="img-size" src="/female-avatar.gif"></img>
          <h2 style={{ marginBottom: "20px" }}>Iniciar sesión</h2>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              backgroundColor: "#0099FF",
              borderColor: "transparent",
              height: "8%",
              borderRadius: "20px",
              marginBottom: "20px",
              color: "#FFFFFF",
            }}
            onClick={signInWithGoogle}
          >
            <img
              src="/google.png"
              alt="Google Icon"
              className="me-2"
              height="20"
            />
            Continue with Google
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              backgroundColor: "#0099FF",
              borderColor: "transparent",
              height: "8%",
              borderRadius: "20px",
              marginBottom: "20px",
              color: "#FFFFFF",
            }}
            // onClick={signInWithMicrosoft}
          >
            <img
              src="/microsoft.png"
              alt="Microsoft Icon"
              className="me-2"
              height="20"
            />
            Continue with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};
