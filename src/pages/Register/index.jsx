import api from "../../services/api";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../validations";
import Selection from "../../components/Selection";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContentInputLabel,
  ContentMain,
  ContentSelect,
  ErrorMessage,
  LinkStyled,
} from "./styles";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formRegisterSchema) });

  const onSubmit = (data) => {
    api
      .post("/users", data)
      .then((res) => {
        navigate("/");
        toast.success("Perfil criado com sucesso!", {
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
        toast.error(err.response.data.message, {
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
      <div>
        <header>
          <div>
            <h2>Kenzie Hub</h2>
            <LinkStyled to="/">Voltar</LinkStyled>
          </div>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
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
      </div>
    </ContentMain>
  );
};

export default Register;
