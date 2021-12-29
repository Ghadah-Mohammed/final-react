import { useContext } from "react";
import { Col, Form, Row, Button } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext";
import video1 from "../assets/video2.mp4"
function Showcase() {
    return (
        <>
            <video className={StyleSheet.video} style={{  pointerEvents: "relative", top: "", left: "0", width: "100%" }}  src={video1} autoPlay muted loop></video>
        </>
    )
}

export default Showcase;

// style={{ pointerEvents: "relative", top: "0", left: "0", width: "100%",}}


{/* <Col style={{backgroundImage:`url("${photo1}")`,
           backgroundPosition: "center",
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",
           height: 400,
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
        }}>
           
           </Col> */}