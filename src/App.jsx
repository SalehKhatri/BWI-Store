import "./App.css";
import {React} from 'react'
import Login from "./Components/Login";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <div>
      <Navbar />
      <Login />
      </div>,
  },
  {
    path: "/",
    element:
    <Home />
  },
  {
    path: "/about",
    element: <div>
    <Navbar/>
    <About/>
    </div>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
