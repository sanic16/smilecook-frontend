import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
        <ToastContainer
          autoClose={2000}
        />
      
    </>
  )
}

export default Layout