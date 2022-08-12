import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../validations";
import { userContext } from "../../providers/UserContext";
import { useContext, useState } from "react";
import Lottie from "react-lottie";
import Selection from "../../components/Selection";

import background from "../../assets/background.json";
import "react-toastify/dist/ReactToastify.css";
import {
  ContentImage,
  ContentInputLabel,
  ContentMain,
  ContentSelect,
  ErrorMessage,
  LinkStyled,
} from "./styles";

const Register = () => {
  const { onSubmitRegister } = useContext(userContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formRegisterSchema) });

  const [animateState] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: background,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ContentMain>
      <div>
        <header>
          <h2>Kenzie Hub</h2>
          <LinkStyled to="/">Voltar</LinkStyled>
        </header>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <h3>Crie sua Conta</h3>
          <span>Rapido e grátis, vamos nessa</span>
          <ContentInputLabel>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </ContentInputLabel>
          <ContentInputLabel>
            <label>Email</label>
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </ContentInputLabel>
          <ContentInputLabel>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </ContentInputLabel>
          <ContentInputLabel>
            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("passwordConfirm")}
            />
            <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
          </ContentInputLabel>
          <ContentInputLabel>
            <label>Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <ErrorMessage>{errors.bio?.message}</ErrorMessage>
          </ContentInputLabel>
          <ContentInputLabel>
            <label>Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <ErrorMessage>{errors.contact?.message}</ErrorMessage>
          </ContentInputLabel>
          <ContentSelect>
            <Controller
              defaultValue="Primeiro módulo (Introdução ao Frontend)"
              control={control}
              name="course_module"
              render={({ field: { onChange, value, ref } }) => (
                <Selection
                  inputRef={ref}
                  value={value}
                  onChange={(event) => onChange(event.value)}
                />
              )}
            />
          </ContentSelect>
          <button type="submit">Cadastrar</button>
        </form>
        <ContentImage>
          <Lottie
            options={defaultOptions}
            isStopped={animateState.isStopped}
            isPaused={animateState.isPaused}
          />
        </ContentImage>
      </div>
    </ContentMain>
  );
};

export default Register;
