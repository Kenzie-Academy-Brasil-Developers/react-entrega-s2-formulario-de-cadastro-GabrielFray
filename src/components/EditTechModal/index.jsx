import { Controller, useForm } from "react-hook-form";
import { useContext } from "react";
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
} from "./styles";

const EditTechModal = () => {
  const { setEditModal, deleteTech, editModal, values, editTech } =
    useContext(TechProviderContext);

  const { control, handleSubmit } = useForm({
    defaultValues: { status: values.status },
  });

  const handleEdit = (formData) => {
    editTech(editModal, formData);
  };

  return (
    <ContentMain>
      <form onSubmit={handleSubmit(handleEdit)}>
        <ContentHeader>
          <h3>Detalhes das Tecnologias</h3>
          <ButtonClose onClick={() => setEditModal(false)}>
            <AiOutlineClose size={"1.3em"} style={{ cursor: "pointer" }} />
          </ButtonClose>
        </ContentHeader>
        <ContentInputLabel>
          <label>Nome da tecnologia</label>
          <span className="titleTech">{values.title}</span>
        </ContentInputLabel>
        <ContentSelect>
          <Controller
            defaultValue="Iniciante"
            control={control}
            name="status"
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
          <button className="buttonSaveEdit" type="submit">
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

export default EditTechModal;
