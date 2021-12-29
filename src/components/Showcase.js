import { useContext } from "react";
import{Col,Form,Row,Button}from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext";
import video1 from"../assets/video1"
function Showcase() {
    return (  
        <>
        <video className={StyleSheet.video} src={video1} autoPlay muted loop></video>
        </>
    )
}

export default Showcase;




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