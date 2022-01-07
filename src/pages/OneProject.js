import { useContext } from "react"
import { Button, Card, Row, Col, Container, ListGroup, Carousel } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import EngineerContext from "../Utils/EngineerContext"

function OneProject() {
  const { projectId } = useParams()
  const { projects, likeProject, profile, company, profileCompany } = useContext(EngineerContext)
  if (!profile && !profileCompany) return <h1>Loading...</h1>
  if (projects.length === 0) return <h1>Loading...</h1>
  const project = projects.find(project => project._id === projectId)

  let liked = false
  if (profile) liked = profile.likes.includes(profile._id)

  console.log(project)
  return (
    <>
      {/* linear-gradient(rgba(0,0,0,0.8), */}
      <Row
        style={{
          backgroundImage: ` url("${project.avatar}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "center",
          display: "flex",
          alignItems: "flex",
          alignItems: "center",
        }}
      >
        <Col md="4">
          <img variant="top" src={project.avatar} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mx-auto">
          <Carousel>
            {project.photo?.map(project1 => (
              <Carousel.Item>
                <img className="d-block w-100" style={{ height: "600px" }} src={project1} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Link to={`/company/${project.companyId._id}`}>
        <Row>
          <h1>{project.companyId?.name}</h1>
        </Row>
      </Link>
      <Col>
        <h1>{project.name}</h1>
        <p className="text-muted">{project.description}</p>
      </Col>
      {/* <Row mx-auto>
        <Col>
          <>
            <Card style={{ border: "12px", margin: "300px 40px 20px 40px" }}>
              <Link to={`/project/${project._id}`}>
                <Card.Img
                  variant="top"
                  src={project.photo}
                  style={{ height: "400px", width: "400px", objectFit: "cover" }}
                />
              </Link>
              <Link to={`/project/${project._id}`}></Link>
              <Card.Title style={{ margin: "15px" }}>{project.title}</Card.Title>
              <Card.Body></Card.Body>
            </Card>
            <Col>
              <Button variant="dark" className="ms-3" onClick={() => likeProject(project._id)}>
                {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
              </Button>
            </Col>
          </>
        </Col>
      </Row> */}
    </>
  )
}

export default OneProject
