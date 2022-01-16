import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import EngineerContext from "../Utils/EngineerContext"

function SignUpcompany() {
  const { signupcompany } = useContext(EngineerContext)
  return (
    <>
      <div className="signupPage">
        <section className="signupform">
          <h1>Sign Up as Company</h1>
          <Form onSubmit={signupcompany}>
            <Form.Group className="mb-3">
              <Form.Label>Name Company</Form.Label>
              <Form.Control required type="text" name="name" placeholder="Enter your First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" name="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description Company</Form.Label>
              <Form.Control required as="textarea" type="text" name="description" placeholder="Enter your description company" />
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
            <h1>signup as User</h1>
            <p>Enter your personal details and join us!</p>
            <button>
              {" "}
              <Link to="/signup">Sign Now! </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default SignUpcompany
