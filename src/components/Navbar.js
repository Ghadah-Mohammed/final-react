import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import { Link } from "react-router-dom"
function NavbarItem() {
  const { logout } = useContext(EngineerContext)

  return (
    <div style={{ position: "absolute", top:0, zIndex: 10, width: "100vw", padding: "20px 60px" }} className="navbartop" >
      <Navbar variant="dark" className="navbarbr"  >
        {/* <Container> */}
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Companies
            </Link>
          </Navbar.Brand>
          <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
            Projects
          </Link>
          <Navbar.Toggle />
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
