import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom";
import App from "./App";
import Login from "./components/login";
import Register from "./components/Register";
import "./App.css";
import "./index.css";
import JobPost from "./components/jobpost";
import { useNavigate } from "react-router-dom";
import JobPostingForm from "./components/jobpostForm";

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
  return <Route element={<Element {...rest} />} />;
};

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<JobPost />} path="/jobpost" />
        <Route element={<JobPostingForm />} path="/jobpost-form" />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
