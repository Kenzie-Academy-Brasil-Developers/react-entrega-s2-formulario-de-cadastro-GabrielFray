import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import LoginForm from "../pages/login";
import RegisterForm from "../pages/register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
export default RoutesMain;
