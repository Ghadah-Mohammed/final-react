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
    <div>
      <Row mx-auto>
        {projects.map(project1 => (
          <Col>
            <>
              <Card  className="zoom" style={{ borderRadius: "20px", border: "12px", margin: "300px 40px 20px 40px"}}>
                <Link to={`/project/${project1._id}`}></Link>
                <Card.Img
               
                  variant="top"
                  src={project1.photo}
                  style={{ height: "400px", width: "400px", objectFit: "cover" }}
                />
                <Link to={`/project/${project1._id}`}></Link>
                <Card.Title style={{ margin: "15px" }}>{project1.title}</Card.Title>
                {/* <Card.Title style={{ margin: "15px" }}>{project1.title}</Card.Title> */}
              </Card>
              <Col>
                <Button
                  onClick={() => likeProject(project1._id)}
                >
                  {profile?.likes.find(like => like._id === project1._id) ? (
                    <MdFavorite style={{ color: `rgba(190, 64, 26, 0.911)`, fontSize: "40px"  }}/>
                  ) : (
                    <MdOutlineFavoriteBorder style={{ color: "black", fontSize: "40px" }}/>
                  )}
                </Button>
              </Col>
            </>
          </Col>
        ))}
      </Row>
      </div>
    </>
  )
}

export default Project
