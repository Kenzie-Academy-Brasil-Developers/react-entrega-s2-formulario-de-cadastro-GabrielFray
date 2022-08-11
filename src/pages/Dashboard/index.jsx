import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../providers/UserContext";
import {
  ContentMain,
  Header,
  ButtonLogout,
  ContentUser,
  ContentTechs,
  Content,
  ContentNavTech,
} from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const { logout } = useContext(userContext);

  const userData = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    if (!token) {
      navigate("/");
    }
  });

  return (
    <ContentMain>
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
            <button>+</button>
          </ContentNavTech>
          <ContentTechs>
            <ul>
              {userData.techs.map((elem) => (
                <li key={elem.id}>
                  <span>{elem.title}</span>
                  <p>
                    {elem.status}
                    <FaRegTrashAlt
                      size={"1.3em"}
                      style={{ cursor: "pointer" }}
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
