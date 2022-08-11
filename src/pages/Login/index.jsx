import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validations";

import "react-toastify/dist/ReactToastify.css";
import {
  ContentInputLabel,
  ContentMain,
  ErrorMessage,
  LinkStyled,
} from "./styles";
import { useContext, useEffect } from "react";
import { userContext } from "../../providers/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { onSubmitLogin } = useContext(userContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    if (token) {
      navigate("/dashboard");
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formLoginSchema) });
  return (
    <ContentMain>
      <h2>Kenzie Hub</h2>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
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
