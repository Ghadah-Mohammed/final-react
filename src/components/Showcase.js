import { useContext, useRef } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import video4 from "../assets/vidow6.mp4"
import photo3 from "../assets/photo3.jpg"
import styles from "./SectionOne.module.css"
function Showcase() {
  // const companySection=useRef(null)
  // const goTowCompanySection=()=>window.scrollTo({top:companySection={companySection}.current.offsetTop,behavior:"smooth"})
  return (
    <>
    <div className="contain">
      <div className="title">
      <h1>Engineering company projects</h1>
      {/* <p>jbhbhbhbhjbhubgvgvg v g v</p> */}
      {/* <Button variant="dark" className="me-4" onClick={goTowCompanySection}>
            Get started !
          </Button> */}
      </div>
        <video
          className={styles.video4}
          style={{
            position:"relative",
            width:"100%",
            height:"20%",
           
          }}
          src={video4}
          autoPlay
          muted
          loop
        ></video>
        <div className="overlay"></div>
     </div>

      {/* <Col
        style={{
          backgroundImage: `url("${photo3}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: "0.9",
        }}
      ></Col> */}
    </>
  )
}

export default Showcase

//  style={{ pointerEvents: "relative", top: "0", left: "0", width: "100%",}}

//============================================

{
}
