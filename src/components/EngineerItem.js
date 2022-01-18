import { useState } from "react";
import { Button, Col, Image } from "react-bootstrap";
import EngineerDeleteModal from "./EngineerDeleteModal";
import {RiDeleteBin5Line} from "react-icons/ri"


function EngineerItem(props) {
 const {engineer1}=props
 const [deleteEngshow, setdeleteEngShow] = useState(false)

    return ( 
        <>
          <Col>
            <Image roundedCircle style={{margin:"10px"}} src={engineer1.photo} height="100px" width="100px" />
            <h6 style={{margin:"10px"}}>{engineer1.name}</h6>
            <Button style={{border:"none",fontSize:"15px",marginLeft:"3px",backgroundColor:"rgb(179, 1, 1)"}} variant="danger" onClick={() => setdeleteEngShow(true)}><RiDeleteBin5Line/> engineer  </Button>
          </Col>
          <EngineerDeleteModal show={deleteEngshow} setShow={setdeleteEngShow} engineer={engineer1} />
        </>
     );
}

export default EngineerItem;