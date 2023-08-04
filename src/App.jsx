import { HomePage } from "./pages/HomePage"
import "./styles/App.scss"
import 'react-toastify/dist/ReactToastify.min.css';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer/>
    </>
  )
}

export default App
