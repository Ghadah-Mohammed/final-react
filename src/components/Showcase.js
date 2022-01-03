import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import video4 from "../assets/video4.mp4"
import photo3 from "../assets/photo3.jpg"
import styles from "./SectionOne.module.css"
function Showcase() {
  return (
    <>
      
        <video
          className={styles.video4}
          style={{
           
            // pointerEvents: "relative",
            // position: "relative",
          //   top: "0",
            // objectFit: "cover",
          //   left: "0",
          //   width: "100%",
          }}
          src={video4}
          autoPlay
          muted
          loop
        ></video>
     

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
