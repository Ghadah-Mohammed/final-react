import { useContext, useState } from "react"
import { Button, Card, Row, Col, Container, ListGroup, Carousel } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import EngineerContext from "../Utils/EngineerContext"
import {BiSend} from "react-icons/bi"
import { icons } from "react-icons"
import SendOfferModal from "../components/SendOfferModal"
function OneProject() {
  const { projectId  } = useParams()
  const [sendshow,setsendshow]=useState(false)
  const { projects, likeProject, profile, company, profileCompany } = useContext(EngineerContext)
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
        <Col md="8" className="mx-auto" style={{margin:"76px"}}>
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
          <h1 style={{marginLeft:"78px",fontSize:"20px"}}>{project.companyId?.name}</h1>
        </Row>
      </Link>
      <Col style={{marginLeft:"40px"}}>
        {/* <h1 style={{textDecorationColor:"none",marginLeft:"40px"}}>{project.title}</h1> */}
        <h3 style={{marginLeft:"40px"}}>Description:</h3>
        <p className="text-muted" style={{marginLeft:"40px",border:"",width: "48vw",
    wordBreak:"break-word"}}>{project.description}</p>
        <Button style={{marginLeft:"40px",marginBottom:"50px"}} onClick={()=>setsendshow(true)}> send offer! <BiSend /></Button>
      </Col>
      <SendOfferModal show={sendshow} setShow={setsendshow} company={project} project={project} />
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
