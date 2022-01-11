import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"

function SendOfferModal(props) {

const { show, setShow, company } = props
const {sendOffer}=useContext(EngineerContext)

console.log("llll")
  return (
    <>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Form onSubmit={e=>sendOffer(e,company.companyId._id)}>
          <Modal.Header closeButton>
            <Modal.Title>send offer for this company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Title
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="title" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Description
              </Form.Label>
              <Col md="8">
                <Form.Control as="textarea" name="description" required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => setShow(false)}>
              send
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default SendOfferModal
