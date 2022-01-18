import { useContext } from "react";
import { Button, Col, Form ,Row } from "react-bootstrap";
import EngineerContext from "../Utils/EngineerContext";
import { MdAddComment } from "react-icons/md";

function AddComment(props) {
  const {addComment}=useContext(EngineerContext)
  const {companyId}=props
    return (
      <div className="mt-4">
        <h2 style={{ margin: "80px 30px 20px "}}>Add Comment</h2>
        <Form className="mt-2" onSubmit={e => addComment(e, companyId)}>
          <Form.Group as={Row} className="md-3">
            {/* <Form.Label column md={2}>
              Comment
            </Form.Label> */}
            
            <Col md="6">
              <Form.Control style={{padding:"7px" ,margin: "10px 30px 20px "}} as="textarea" name="comment"  required />
            </Col>
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit"> <MdAddComment/>Add</Button>
            </Col>
          
          </Form.Group>
  
          {/* <Form.Group as={Row} className="my-1">
           
          </Form.Group> */}
        </Form>
      </div>
    )
  }
  

export default AddComment;