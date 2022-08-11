import { Controller, useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { formCreateModalSchema } from "../../validations";
import "react-toastify/dist/ReactToastify.css";

import { TechProviderContext } from "../../providers/TechProvider";
import { ContentSelect } from "../../pages/Register/styles";

import SelectEdit from "../SelectEdit";
import { AiOutlineClose } from "react-icons/ai";
import {
  ButtonClose,
  ContentButton,
  ContentHeader,
  ContentInputLabel,
  ContentMain,
  ErrorMessage,
} from "./styles";

const EditModal = () => {
  const { setEditModal, deleteTech, editModal, values } =
    useContext(TechProviderContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formCreateModalSchema),
    defaultValues: { course_module: values.status },
  });
  return (
    <ContentMain>
      <form onSubmit={(event) => event.preventDefault()}>
        <ContentHeader>
          <h3>Detalhes das Tecnologias</h3>
          <ButtonClose onClick={() => setEditModal(false)}>
            <AiOutlineClose size={"1.3em"} style={{ cursor: "pointer" }} />
          </ButtonClose>
        </ContentHeader>
        <ContentInputLabel>
          <label>Nome da tecnologia</label>
          <span className="titleTech">{values.title}</span>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </ContentInputLabel>
        <ContentSelect>
          <Controller
            defaultValue="Iniciante"
            control={control}
            name="course_module"
            render={({ field: { onChange, value, ref } }) => (
              <SelectEdit
                inputRef={ref}
                value={value}
                onChange={(event) => onChange(event.value)}
              />
            )}
          />
        </ContentSelect>
        <ContentButton>
          <button className="buttonSaveEdit" onClick={handleSubmit()}>
            Salvar alterações
          </button>
          <button className="delete" onClick={() => deleteTech(editModal)}>
            Excluir
          </button>
        </ContentButton>
      </form>
    </ContentMain>
  );
};

export default EditModal;
