import { useContext } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import EngineerContext from "../Utils/EngineerContext"

function Project() {
  const { projects, likeProject, profile } = useContext(EngineerContext)
  if (projects.length === 0) return <h1>Loading...</h1>
  let liked = false
  
  return (
      <>
      <Row mx-auto>
        {projects.map(project1 => (
          <Col>
            <>
              <Card style={{ border: "12px", margin: "300px 40px 20px 40px" }}>
                <Link to={`/project/${project1._id}`}></Link>
                <Card.Img
                  variant="top"
                  src={project1.photo}
                  style={{ height: "400px", width: "400px", objectFit: "cover" }}
                />
                <Link to={`/project/${project1._id}`}></Link>
                <Card.Title style={{ margin: "15px" }}>{project1.title}</Card.Title>
                {/* <Card.Title style={{ margin: "15px" }}>{project1.title}</Card.Title> */}

                <Card.Body>
                  <Card.Text>Some quick example text to build on</Card.Text>
                </Card.Body>
              </Card>
              <Col>
                <Button style={{backgroundColor:"white",color:"red"}} className="ms-3" onClick={() => likeProject(project1._id)}>
                  {profile?.likes.find(like => like._id === project1._id) ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
                </Button>
              </Col>
            </>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Project
