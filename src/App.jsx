import Routes from "./routes";

import { ToastContainer } from "react-toastify";

import UserProvider from "./providers/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes></Routes>;
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
