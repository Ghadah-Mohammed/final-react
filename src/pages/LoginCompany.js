import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"

function Login() {
  const { logincompany } = useContext(EngineerContext)
  return (
    <>
      <div className="signupPage login">
        <section className="signuparea pt-5" style={{ height: "300px" }}>
          <h1>login as user</h1>
          <p>Enter your personal details and join us!</p>
          <button>
            {" "}
            <a href="/login">Log in Now! </a>
           
          </button>
        </section>
        <section className="signupform pt-5">
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

export default Login
