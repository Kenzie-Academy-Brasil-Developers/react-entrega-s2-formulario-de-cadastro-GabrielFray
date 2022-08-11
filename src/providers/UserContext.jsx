import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const userContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    if (!token) {
      navigate("/");
    }
  }, []);

  const onSubmitRegister = (data) => {
    api
      .post("/users", data)
      .then(() => {
        navigate("/");
        toast.success("Perfil criado com sucesso!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          toastId: 1,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const onSubmitLogin = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("@KenzieHub:token", res.data.token);
        localStorage.setItem("@KenzieHub:user", JSON.stringify(res.data.user));

        navigate("/dashboard");

        toast.success("Logado com sucesso!", {
          toastId: 1,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login e senha incorreto!", {
          toastId: 1,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        onSubmitLogin,
        logout,
        onSubmitRegister,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
