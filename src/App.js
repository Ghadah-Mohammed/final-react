import axios from "axios"
import EngineerContext from "./Utils/EngineerContext"
import Navbar from "./components/Navbar"
import Home from "./page.js/Home"
import { toast } from "react-toastify"
import { ToastContainer } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"

function App() {
  return(
    <>
    
    <EngineerContext.Provider>
      
    <Navbar/>
    <Routes>
    <Route  path="/" element={<Home />}></Route>
    </Routes>
   </EngineerContext.Provider>
   </>
  )

  
}


export default App
