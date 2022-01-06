import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { useContext } from "react"
import EngineerContext from "../Utils/EngineerContext"

function ProjectItem(props) {
  const { project } = props
  const { likeProject, profile, projects } = useContext(EngineerContext)
  if (!profile) return <h1>Loading...</h1>
  if (!project) return <h1>Loading...</h1>

  return (
    <>
      <Card border="light" style={{ maxWidth: "350px", margin: "28px", border: "12px" }} className="projectitem">
        <Link to={`/project/${project._id}`} className="text-black" style={{ textDecoration: "none" }}>
          <Card.Img variant="top" src={project.photo} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
        </Link>{" "}
        <Col>
          <Button
            style={{ backgroundColor: "white", color: "red" }}
            className="ms-3"
            onClick={() => likeProject(project._id)}
          >
            {profile?.likes.find(like => like._id === project._id) ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
          </Button>
        </Col>
      </Card>
    </>
  )
}

export default ProjectItem
