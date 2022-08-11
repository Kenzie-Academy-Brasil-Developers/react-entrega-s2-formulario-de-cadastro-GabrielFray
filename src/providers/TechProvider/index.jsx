import { createContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

export const TechProviderContext = createContext({});

const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  const [values, setValues] = useState("");

  const [registerModal, setRegisterModal] = useState(false);

  const [editModal, setEditModal] = useState(false);

  const token = localStorage.getItem("@KenzieHub:token");

  const createTech = (data) => {
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

  const deleteTech = (tech_id) => {
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
        setEditModal,
        setTechs,
        techs,
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
