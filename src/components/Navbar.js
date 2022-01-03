import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import { Link } from "react-router-dom"
function NavbarItem() {
  const { logout } = useContext(EngineerContext)
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Companies
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {localStorage.tokenEngineer ? (
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
      </Container>
    </Navbar>
  )
}

export default NavbarItem
