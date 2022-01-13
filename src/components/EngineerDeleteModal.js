import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"

function EngineerDeleteModal(props) {
  const { deleteEngineer } = useContext(EngineerContext)
  const { show, setShow, engineer } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Engineer</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Engineer ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteEngineer(engineer._id)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EngineerDeleteModal
