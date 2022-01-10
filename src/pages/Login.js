import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"

function LoginUser() {
  const { login, logincompany } = useContext(EngineerContext)
  return (
    <>
      <div className="signupPage login">
        <section className="signuparea pt-5" style={{ height: "300px" }}>
          <h1>login as company</h1>
          <button>
            {" "}
            <a href="/logincompany">Login Now! </a>
          </button>
        </section>
        <section className="signupform pt-5">
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
