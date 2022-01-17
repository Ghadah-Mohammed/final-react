import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"

function UserEditModal(props) {
  const { show, setShow, user } = props
  const { editProfileUser } = useContext(EngineerContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-5" onSubmit={e => editProfileUser(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                First Name:
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="firstName" defaultValue={user.firstName} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Last Name:
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="lastName" defaultValue={user.lastName}  />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label style={{paddingLeft:"25px"}} column md="3">
              password:
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password"/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label style={{paddingLeft:"25px"}} column md="3">
              avatar:
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="avatar" defaultValue={user.avatar} />
            </Col>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={() => setShow(false)}>
              Confirm Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default UserEditModal
