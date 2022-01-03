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
import Profile from "./pages/Profile"

function App() {
  const [companies, setCompanies] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  const getCompanies = async () => {
    const response = await axios("http://localhost:5000/api/company/verifiedCompanies")
    console.log(response.data)
    setCompanies(response.data)
  }

  //get profile
  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/getprofile", {
      headers: {
        Authorization: localStorage.tokenEngineer,
      },
    })
    setProfile(response.data)
    console.log(response.data)
  }

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post("http://localhost:5000/api/auth/signup", userBody)
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
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)
      const token = response.data
      localStorage.tokenEngineer = token
      console.log("login success")
      getProfile()
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenEngineer")
    console.log("logout success")
  }

  const likeProject = async projectId => {
    console.log(projectId)
    try {
      const response = await axios.get(`http://localhost:5000/api/project/${projectId}/likes`, {
        headers: {
          Authorization: localStorage.tokenEngineer,
        },
      })
      getCompanies()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  useEffect(() => {
    getCompanies()
    if (localStorage.tokenEngineer) getProfile()
  }, [])

  const store = {
    companies,
    signup,
    login,
    logout,
    profile,
    likeProject,
  }

  return (
    <>
      <EngineerContext.Provider value={store}>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/companies" element={<AllCompany />} /> */}
          <Route path="/company/:companyId" element={<OneCompany />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </EngineerContext.Provider>
    </>
  )
}

export default App
