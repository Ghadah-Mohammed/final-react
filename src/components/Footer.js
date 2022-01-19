import { Button } from "bootstrap"
import { Col } from "react-bootstrap"
import logo2 from "../assets/logo3.png"
import { IconContext } from "react-icons"
import { AiOutlineMail } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
function Footer() {
  return (
    <div className="footer">
      <Col>
        <img src={logo2} width="120" height="90"  />
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
