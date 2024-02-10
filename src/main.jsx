import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routinechest from './components/routinechest.jsx';
import Routineback from './components/routineback.jsx';
import Routineleg from './components/routineleg.jsx';
import { UserAuthContextProvider } from './context/UserAuthContext.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import All from './All.jsx';
import Protectrouter from './auth/Protectrouter.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Routinechest",
    element: <Routinechest/>,
  },
  {
    path: "/Routineback",
    element: <Routineback/>,
  },
  {
    path: "/Routineleg",
    element: <Routineleg/>,
  },
  {
    path: "/All",
    element: <Protectrouter><All/></Protectrouter>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthContextProvider>
    <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);