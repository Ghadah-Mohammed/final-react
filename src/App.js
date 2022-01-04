import axios from "axios"
import EngineerContext from "./Utils/EngineerContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { ToastContainer, toast } from "react-toastify"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import OneCompany from "./pages/OneCompany"
import AllCompany from "./components/AllCompany"
import "./App.css"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Project from "./pages/Project"
import OneProject from "./pages/OneProject"
import AllProject from "./components/AllProject"

function App() {
  const [companies, setCompanies] = useState([])
  const [profile, setProfile] = useState(null)
  const [projects, setProjects] = useState([])
  const navigate = useNavigate()

  //getCompanies
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

  //get project
  const getProjects = async () => {
    const response = await axios("http://localhost:5000/api/project")
    setProjects(response.data)
    console.log(response.data)
  }

  //signup
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

  //login
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

  //logout
  const logout = () => {
    localStorage.removeItem("tokenEngineer")
    console.log("logout success")
  }

  //likeProject
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
    getProjects()
    if (localStorage.tokenEngineer) getProfile()
  }, [])

  const store = {
    companies,
    signup,
    login,
    logout,
    profile,
    likeProject,
    projects,
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
          <Route path="/projects" element={<AllProject />} />
          <Route path="/project/:projectId" element={<OneProject />} />
        </Routes>
      </EngineerContext.Provider>
    </>
  )
}

export default App
