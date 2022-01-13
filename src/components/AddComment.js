import { useContext } from "react";
import { Button, Col, Form ,Row } from "react-bootstrap";
import EngineerContext from "../Utils/EngineerContext";


function AddComment(props) {
  const {addComment}=useContext(EngineerContext)
  const {companyId}=props
    return (
      <div className="mt-4 ms-4">
        <h2>Add Comment</h2>
        <Form className="mt-2" onSubmit={e => addComment(e, companyId)}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2" >
              Comment
            </Form.Label>
            <Col md="6">
              <Form.Control style={{padding:"7px"}} as="textarea" name="comment"  required />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="my-1">
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit">Add</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
  

export default AddComment;