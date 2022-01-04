import { useContext } from "react"
import { Button, Card, Row, Col, Container, ListGroup } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import EngineerContext from "../Utils/EngineerContext"

function OneCompany() {
  const { companyId } = useParams()
  const { companies, likeProject, profile } = useContext(EngineerContext)
  if (companies.length === 0 && profile.length === 0) return <h1>Loading...</h1>
  const company = companies.find(company => company._id === companyId)
  console.log(company.project)
  console.log(profile.likes)
  let liked = false
  if (profile)
    liked = profile.likes.map(like => {
   
    })
  console.log(liked)
  return (
    <>
      {/* linear-gradient(rgba(0,0,0,0.8), */}
      <Row
        style={{
          backgroundImage: ` url("${company.avatar}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "center",
          display: "flex",
          alignItems: "flex",
          alignItems: "center",
        }}
      >
        <Col md="4">
          <img variant="top" src={company.avatar} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col>
          <h1>{company.name}</h1>
          <p className="text-muted">{company.description}</p>
        </Col>
      </Row>
      {/* <Row>
        {company.project.map(project1=>(

        ))}
      </Row>*/}

      <Row mx-auto>
        {company.project.map(project1 => (
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
                <Card.Body>
                  <Card.Text>Some quick example text to build on</Card.Text>
                </Card.Body>
              </Card>
              <Col>
                <Button variant="dark" className="ms-3" onClick={() => likeProject(project1._id)}>
                  {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
                </Button>
              </Col>
            </>
          </Col>
        ))}
      </Row>

      <Row style={{ width: "800px" }}>
        <h2>Comments</h2>
        {company.comment.map(comment1 => (
          <ListGroup>
            <ListGroup.Item>
              <h6>{comment1.owner.firstName}</h6>
              <img src={comment1.owner.avatar} width="100px" height="100px" />
              {comment1.comment}
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Row>
    </>
  )
}

export default OneCompany
