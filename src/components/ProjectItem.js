import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { useContext, useState } from "react"
import EngineerContext from "../Utils/EngineerContext"
import ProjectEditModal from "./ProjectEditModal"
import ProjectDeleteModal from "./ProjectDeleteModal"
function ProjectItem(props) {
  const [editShow, seteditShow] = useState(false)
  const [deleteShow, setdeleteShow] = useState(false)
  const { project, fromProfile } = props
  const { likeProject, profile, projects, profileCompany } = useContext(EngineerContext)
  if (!profile && !profileCompany) return <h1>Loading...</h1>
  // if (!profileCompany) return <h1>Loading...</h1>

  if (!project) return <h1>Loading...</h1>

  return (
    <>
      <Card border="light" style={{ maxWidth: "350px", margin: "28px", border: "12px" }} className="projectitem">
        <Link to={`/project/${project._id}`} className="text-black" style={{ textDecoration: "none" }}>
          <Card.Img variant="top" src={project.photo} height="220px" />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
        </Link>{" "}
        <Col>
          {fromProfile ? (
            <>
              <Button onClick={() => seteditShow(true)}>Edit project </Button>
              <Button variant="danger" onClick={() => setdeleteShow(true)}>
                {" "}
                delete Project{" "}
              </Button>
            </>
          ) : (
            <Button
              style={{ backgroundColor: "white", color: "red" }}
              className="ms-3"
              onClick={() => likeProject(project._id)}
            >
              {profile?.likes.find(like => like._id === project._id) ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
            </Button>
          )}
        </Col>
      </Card>
      <ProjectEditModal show={editShow} setShow={seteditShow} project={project} />
      <ProjectDeleteModal show={deleteShow} setShow={setdeleteShow} project={project} />
    </>
  )
}

export default ProjectItem
