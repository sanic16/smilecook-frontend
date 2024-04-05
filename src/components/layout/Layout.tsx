import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <ToastContainer
          autoClose={2000}
        />
      
    </>
  )
}

export default Layout