import { useNavigate } from "react-router-dom";
import { Header, ButtonLogout, ContentUser, Content } from "./styles";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <Header>
        <h1>Kenzie Hub</h1>
        <ButtonLogout onClick={() => logout()}>Sair</ButtonLogout>
      </Header>
      <main>
        <ContentUser>
          <h3>Olá, {user.name}</h3>
          <span>{user.course_module}</span>
        </ContentUser>
        <Content>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </Content>
      </main>
    </div>
  );
};

export default Dashboard;
