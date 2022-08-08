import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validations";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContentInputLabel,
  ContentMain,
  ErrorMessage,
  LinkStyled,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formLoginSchema) });

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("@KenzieHub:token", res.data.token);
        localStorage.setItem("@KenzieHub:user", JSON.stringify(res.data.user));
        console.log(res.data.user);

        navigate("./dashboard");

        toast.success("Logado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
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
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <ContentMain>
      <h2>Kenzie Hub</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <ContentInputLabel>
          <label>Email</label>
          <input type="text" placeholder="Email" {...register("email")} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </ContentInputLabel>
        <ContentInputLabel>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </ContentInputLabel>
        <button>Entrar</button>
        <span>Ainda não possui uma conta?</span>
        <LinkStyled to="/register">Cadastre-se</LinkStyled>
      </form>
    </ContentMain>
  );
};

export default Login;
