import axios from "axios"
import EngineerContext from "./Utils/EngineerContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { toast } from "react-toastify"
import { ToastContainer } from "react-bootstrap"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function App() {
  const [companies, setCompanies] = useState([])
  const navigate = useNavigate()

  const getCompanies = async () => {
    const response = await axios("http://localhost:5000/api/company/verifiedCompanies")
    console.log(response.data)
    setCompanies(response.data)
  }

  useEffect(() => {
    getCompanies()
  }, [])

  const store = {
    companies,
  }

  return (
    <>
      <Navbar />
      <EngineerContext.Provider value={store}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </EngineerContext.Provider>
    </>
  )
}

export default App
