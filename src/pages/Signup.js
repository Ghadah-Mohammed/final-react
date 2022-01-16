import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import EngineerContext from "../Utils/EngineerContext"

function SignUp() {
  const { signup } = useContext(EngineerContext)
  return (
    <>
      <div className="signupPage">
        <section className="signupform">
          <h1>Sign Up as user</h1>
          <Form onSubmit={signup}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="text" name="firstName" placeholder="Enter your First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required type="text" name="lastName" placeholder="Enter your last name " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Photo</Form.Label>
              <Form.Control required type="url" name="avatar" placeholder="Photo" />
            </Form.Group>
            <button required type="submit">
              Sign
            </button>
          </Form>
        </section>
        {/* className={Style.bgimg} */}
        <section className="signuparea">
          <div style={{ height: "40%", textDecoration: "none" }}>
            <h1>sign Up as Company</h1>
            <p>Enter your Company details and join us!</p>
            <button>
              {" "}
              <Link to="/signupcompany">Sign Now! </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default SignUp
