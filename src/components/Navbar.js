import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import { Link } from "react-router-dom"


function NavbarItem() {
  return (<>
    <Navbar style={{ padding: "18px" }} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Companies</Nav.Link>
          <Nav.Link href="#features">project</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                <button style={{borderRadius:"18px",border:"opx"}}>Get started</button>
              </Link>
            </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default NavbarItem;




