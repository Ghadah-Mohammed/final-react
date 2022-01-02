import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import { Link } from "react-router-dom"

function NavbarItem() {
  return (
    <Navbar >
      <Container>
        <Navbar.Brand ><Link to="/" style={{textDecoration:"none",color:"black"}}>Companies</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text>
          login <a href="#login"></a>
        </Navbar.Text>
        
        <Navbar.Text>
          login <a href="#login"></a>
        </Navbar.Text> */}

          <Nav className="ms-auto">
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
