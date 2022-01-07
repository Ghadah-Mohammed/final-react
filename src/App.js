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
import ProfileUser from "./pages/ProfileUser"
import Project from "./pages/Project"
import OneProject from "./pages/OneProject"
import AllProject from "./components/AllProject"
import SignUpCompany from "./pages/SignupCompany"
import LoginCompany from "./pages/LoginCompany"
function App() {
  const [companies, setCompanies] = useState([])
  const [profile, setProfile] = useState(null)
  const [projects, setProjects] = useState([])
  const [profileCompany, setprofileCompany] = useState(null)
  const navigate = useNavigate()

  //getCompanies
  const getCompanies = async () => {
    const response = await axios("http://localhost:5000/api/company/verifiedCompanies")
    console.log(response.data)
    setCompanies(response.data)
  }

  //get profile user
  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/getprofile", {
      headers: {
        Authorization: localStorage.tokenEngineer,
      },
    })
    setProfile(response.data)
    console.log(response.data)
  }

  //edit profile user
  const editProfileUser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.put(`http://localhost:5000/api/auth/profile`, userBody, {
        headers: {
          Authorization: localStorage.tokenEngineer,
        },
      })
      getProfile()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
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
    localStorage.removeItem("tokenCompany")
    console.log("logout success")
  }

  //signup
  const signupcompany = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        name: form.elements.name.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post("http://localhost:5000/api/company/signup", userBody)
      console.log("signup success")

      navigate("/logincompany")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  //loginCompany
  const logincompany = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/company/login", userBody)
      const token = response.data
      localStorage.tokenCompany = token
      console.log("login success")

      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //
  const logoutcompany = () => {
    localStorage.removeItem("token")
    console.log("logout success")
  }

  //get profile Company
  const getProfileCompany = async () => {
    const response = await axios.get("http://localhost:5000/api/company/profile", {
      headers: {
        Authorization: localStorage.tokenCompany,
      },
    })
    setprofileCompany(response.data)
    console.log(response.data)
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

  //add Project

  const addProject = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const projectBody = {
        title: form.elements.title.value,
        description: form.elements.value,
        photo: form.elements.value,
      }
      await axios.post(`http://localhost:5000/api/project/add-project`, projectBody, {
        Authorization: localStorage.tokenCompany,
      })
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //add comment
  const addComment = async (e, companyId) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }

      form.reset()
      await axios.post(`http://localhost:5000/api/company/${companyId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenEngineer,
        },
      })

      getCompanies()
      toast.success("Comment added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //delet comment
  const deleteComment = async (companyId, commentId) => {
    console.log("hhh")
    await axios.delete(`http://localhost:5000/api/company/${companyId}/comments/${commentId}`, {
      headers: {
        Authorization: localStorage.tokenEngineer,
      },
    })
    getCompanies()
  }
  useEffect(() => {
    getCompanies()
    getProjects()
    if (localStorage.tokenEngineer) getProfile()
    if (localStorage.tokenCompany) getProfileCompany()
  }, [])

  const store = {
    companies,
    signup,
    login,
    logout,
    profile,
    likeProject,
    projects,
    addComment,
    editProfileUser,
    deleteComment,
    signupcompany,
    logincompany,
    profileCompany,
    logoutcompany,
    addProject,
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
          <Route path="/profile" element={localStorage.tokenEngineer ? <ProfileUser /> : null} />
          <Route path="/projects" element={<AllProject />} />
          <Route path="/project/:projectId" element={<OneProject />} />
          <Route path="/signupcompany" element={<SignUpCompany />} />
          <Route path="/logincompany" element={<LoginCompany />} />
        </Routes>
      </EngineerContext.Provider>
    </>
  )
}

export default App
