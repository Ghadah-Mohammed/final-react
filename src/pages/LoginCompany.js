import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import EngineerContext from "../Utils/EngineerContext"

function LoginCompany() {
  const { logincompany } = useContext(EngineerContext)
  return (
    <>
      <div className="loginPage login">
        <section className="loginarea " style={{ height: "400px" }}>
          <h1>login as user</h1>
          <p>Enter your personal details and join us!</p>
          {/* <button> */}
            {" "}
            <Link to="/login"> <button style={{color:"black"}} > Log in Now!</button> </Link>
           
          {/* </button> */}
        </section>
        <section className="loginform">
          <Form onSubmit={logincompany} style={{ height: "300px" }}>
            <h1>login as company</h1>
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

export default LoginCompany
