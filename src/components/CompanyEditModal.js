import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"

function CompanyEditModal(props) {
  const { show, setShow, company } = props
  console.log(company)
  const { editProfileCompany } = useContext(EngineerContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form  onSubmit={e => editProfileCompany(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit information company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Name company:
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="name" defaultValue={company.name} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Description:
              </Form.Label>
              <Col md="8">
                <Form.Control as="textarea" type="text" name="description" defaultValue={company.description} required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label style={{paddingLeft:"25px"}} column md="3">
              password:
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label style={{paddingLeft:"25px"}} column md="3">
              avatar:
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="avatar" defaultValue={company.avatar} required />
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

export default CompanyEditModal
