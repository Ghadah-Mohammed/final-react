import axios from "axios"
import EngineerContext from "./Utils/EngineerContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { toast } from "react-toastify"
import { ToastContainer } from "react-bootstrap"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import OneCompany from "./pages/OneCompany"
import AllCompany from "./components/AllCompany"
import "./App.css"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"

function App() {
  const [companies, setCompanies] = useState([])
  const navigate = useNavigate()

  const getCompanies = async () => {
    const response = await axios("http://localhost:5000/api/company/verifiedCompanies")
    console.log(response.data)
    setCompanies(response.data)
  }

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        photo: form.elements.photo.value,
      }
      await axios.post("http://localhost:5000/api/auth/signup",userBody)
      console.log("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        photo: form.elements.photo.value,
      }
     const response= await axios.post("http://localhost:5000/api/auth/login",userBody)
     const token=response.data
     localStorage.tokenEngeneer=token
      console.log("login success")
      navigate("/")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  useEffect(() => {
    getCompanies()
  }, [])

  const store = {
    companies,
    signup,
  }

  return (
    <>
      <Navbar />
      <EngineerContext.Provider value={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<AllCompany />} />
          <Route path="/company/:companyId" element={<OneCompany />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </EngineerContext.Provider>
    </>
  )
}

export default App
