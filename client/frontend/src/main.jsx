import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import  Register  from "./components/register";
import RegisterFinal from "./components/registerfinal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path : '/login',
    element : <Login/>,
  },
  {
    path : '/register',
    element : <Register/>,
  }
  ,
  {
    path : '/registerFinal',
    element : <RegisterFinal/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);