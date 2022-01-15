import { Button } from "bootstrap"
import { Col } from "react-bootstrap"
// import Logo from "../images/Logo.png"
import { IconContext } from "react-icons"
import { AiOutlineMail } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
function Footer() {
  return (
    <div style={{marginTop:"50px" , Button:"0"}} className="footer">
      <Col>
        {/* <img src={} width="100" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" /> */}
      </Col>
      <Col>
        <h6>
          Made with <FcLike /> ghadah mohammed
        </h6>
        <h4>About</h4>
        <p>
          Welcome. We present here a group of engineering companies and their projects that I worked on. You can
          communicate with companies to work with you on your projects.{" "}
        </p>
      </Col>
      <Col>
        <h4> Contact </h4>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <AiOutlineMail />
          <a>engineering-projects@gmail.com</a>
        </IconContext.Provider>
      </Col>
    </div>
  )
}

export default Footer
