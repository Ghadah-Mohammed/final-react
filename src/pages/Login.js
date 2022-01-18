import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import EngineerContext from "../Utils/EngineerContext"

function LoginUser() {
  const { login, logincompany } = useContext(EngineerContext)
  return (
    <>
      <div className="loginPage login">
        <section className="loginarea " style={{ height: "400px" }}>
          <h1>login as company</h1>
          <p>Enter your company details and join us!</p>
            {" "}
          {/* <button> */}
            <Link to="/logincompany">
              
            <button className="buttoninlog"style={{color:"black"}} >Login Now!</button>
             </Link>
          {/* </button> */}
        </section>
        <section className="loginform ">
          <Form onSubmit={login} style={{ height: "300px" }}>
            <h1>Log in as User</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            <button type="submit">Login!</button>
          </Form>
        </section>
      </div>
    </>
  )
}

export default LoginUser
