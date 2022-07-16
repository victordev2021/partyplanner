import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Login } from "./pages/dashboard/Login";
import { Register } from "./pages/dashboard/Register";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { NavBar } from "./components/NavBar";
import { AuthProvider } from "./context/authContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <>
      <NavBar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About></About>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
