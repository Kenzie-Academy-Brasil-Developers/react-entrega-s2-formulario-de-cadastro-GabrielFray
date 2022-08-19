import Routes from "./routes";

import { ToastContainer } from "react-toastify";

import UserProvider from "./providers/UserContext";

import TechProvider from "./providers/TechProvider";

function App() {
  return (
    <UserProvider>
      <TechProvider>
        <Routes></Routes>;
        <ToastContainer />
      </TechProvider>
    </UserProvider>
  );
}

export default App;
