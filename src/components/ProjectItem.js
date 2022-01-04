import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function ProjectItem(props) {
  const { project } = props

  return (
    <>
      <Card border="light" style={{ maxWidth: "350px", margin: "28px", border: "12px" }} className="projectitem">
        <Link to={`/project/${project._id}`} className="text-black" style={{ textDecoration: "none" }}>
          <Card.Img variant="top" src={project.photo} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </>
  )
}

export default ProjectItem
