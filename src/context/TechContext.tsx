import { toast } from "react-toastify";
import { createContext, useState } from "react";
import { IProps, ITechContext, ITechData } from "../interfaces";

import api from "../services/api";

export const TechProviderContext = createContext({} as ITechContext);

const TechProvider = ({ children }: IProps) => {
  const [techs, setTechs] = useState<[]>([]);

  const [registerModal, setRegisterModal] = useState<boolean>(false);

  const [editModal, setEditModal] = useState<boolean | string>(false);

  const [values, setValues] = useState<any>();

  const token = localStorage.getItem("@KenzieHub:token");

  const createTech = (data: ITechData) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then(() => {
        toast.success("Tecnologia criada!", {
          toastId: 1,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setRegisterModal(false);
      })
      .catch(() => {
        toast.error("Tecnologia já criada!", {
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

  const editTech = (tech_id: string, data: ITechData) => {
    api
      .put(`/users/techs/${tech_id}`, data, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then(() => {
        toast.success("Status da tecnologia atualizada!", {
          toastId: 1,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEditModal(false);
      });
  };

  const deleteTech = (tech_id: string) => {
    api
      .delete(`/users/techs/${tech_id}`, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then(() => {
        toast.success("Tecnologia deletada!", {
          toastId: 1,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEditModal(false);
      });
  };

  return (
    <TechProviderContext.Provider
      value={{
        registerModal,
        setRegisterModal,
        editModal,
        editTech,
        setEditModal,
        techs,
        setTechs,
        createTech,
        deleteTech,
        values,
        setValues,
      }}
    >
      {children}
    </TechProviderContext.Provider>
  );
};

export default TechProvider;
