import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import { Link } from "react-router-dom"
// import { useState } from "react"
import logo2 from "../assets/logo3.png"
function NavbarItem() {
  const { logout } = useContext(EngineerContext)
// const [navbartop,setNavbar]=useState(false)

// const changeBackground =()=>{
//   if(window.scrollY>=80){
//     setNavbar(true)
//   }else{
//     setNavbar(false)
//   }
// }

// window.addEventListener('scroll', changeBackground)
  return (
    
    <div style={{ position: "absolute", top:0, zIndex: 10, width: "100vw", padding: "20px 60px" }} className="navbartop" >
      <Navbar variant="dark" style={{height:"30px"}}>
        {/* <Container> */}
          <Navbar.Brand>
          <img src={logo2} width="120" height="90" style={{marginTop:"3px"}}/>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link className="nav-link" to="/" style={{ textDecoration: "none"}}>
              Companies
            </Link>
          <Link className="nav-link" className="nav-link" to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
          </Nav>
          {/* <Navbar.Toggle /> */}
          <Navbar.Collapse className="justify-content-end">
            {localStorage.tokenEngineer || localStorage.tokenCompany ? (
              <Nav className="ms-auto">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
                <Link className="nav-link" to="/" onClick={logout}>
                  Logout
                </Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  )
            }
export default NavbarItem


