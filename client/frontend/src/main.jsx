import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterFinal from "./components/RegisterFinal";
import "./App.css";
import "./index.css";

const isAuthenticated = () => {
  return localStorage.getItem('jwtToken') !== null;
};

const AuthenticatedRoute = ({ element: Element, ...rest }) => {
  const navigate = useNavigate();
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    navigate('/login');
    return null;
  }
  return <Element {...rest} />;
};

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerFinal" element={<RegisterFinal />} />
        {/* Use AuthenticatedRoute for protected routes */}
        {/* <Route
          path="/dashboard"
          element={<AuthenticatedRoute element={<Dashboard />} />}
        /> */}
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
