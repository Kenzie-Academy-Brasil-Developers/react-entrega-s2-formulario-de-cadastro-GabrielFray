import { FaEllipsisH } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { userContext } from "../../providers/UserContext";
import { TechProviderContext } from "../../providers/TechProvider";

import CreateModal from "../../components/CreateModal";
import {
  ContentMain,
  Header,
  ButtonLogout,
  ContentUser,
  ContentTechs,
  Content,
  ContentNavTech,
  ButtonOpen,
} from "./styles";
import EditModal from "../../components/EditModal";
import api from "../../services/api";

const Dashboard = () => {
  const { logout } = useContext(userContext);

  const {
    registerModal,
    setRegisterModal,
    editModal,
    setEditModal,
    setTechs,
    techs,
    setValues,
  } = useContext(TechProviderContext);

  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  const token = localStorage.getItem("@KenzieHub:token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  useEffect(() => {
    api
      .get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTechs(res.data.techs))
      .catch((err) => console.log(err));
  }, [registerModal, editModal, token, setTechs]);

  return (
    <ContentMain>
      {registerModal && <CreateModal />}
      {editModal && <EditModal />}
      <Header>
        <div>
          <h1>Kenzie Hub</h1>
          <ButtonLogout onClick={() => logout()}>Sair</ButtonLogout>
        </div>
      </Header>
      <main>
        <ContentUser>
          <div>
            <h3>Olá, {userData?.name}</h3>
            <span>{userData?.course_module}</span>
          </div>
        </ContentUser>
        <Content>
          <ContentNavTech>
            <h2>Tecnologias</h2>
            <ButtonOpen onClick={() => setRegisterModal(true)}>+</ButtonOpen>
          </ContentNavTech>
          <ContentTechs>
            <ul>
              {techs?.map((elem) => (
                <li key={elem.id}>
                  <span>{elem.title}</span>
                  <p>
                    {elem.status}
                    <FaEllipsisH
                      size={"1.3em"}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setEditModal(elem.id);
                        setValues({ title: elem.title, status: elem.status });
                      }}
                    />
                  </p>
                </li>
              ))}
            </ul>
          </ContentTechs>
        </Content>
      </main>
    </ContentMain>
  );
};

export default Dashboard;
