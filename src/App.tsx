import Register from "./pages/register/Register"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Register />  
      <ToastContainer
        autoClose={2000}
      />
    </>
  )
}

export default App