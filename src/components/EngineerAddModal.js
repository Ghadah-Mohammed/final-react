import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"

function EngineerAddModal(props) {
  const { show, setShow } = props
  const { addEngineer } = useContext(EngineerContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addEngineer}>
        <Modal.Header closeButton>
          <Modal.Title>Edit information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name"  required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add engineer
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EngineerAddModal
