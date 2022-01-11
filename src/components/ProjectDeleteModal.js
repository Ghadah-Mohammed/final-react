import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"

function ProjectDeleteModal(props) {
    const { deleteProject } = useContext(EngineerContext)
    const { show, setShow, project } = props
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this project ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteProject(project._id)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  
  export default ProjectDeleteModal