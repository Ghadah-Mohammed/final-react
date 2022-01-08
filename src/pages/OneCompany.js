import { useContext } from "react"
import { Button, Card, Row, Col, Container, ListGroup } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import EngineerContext from "../Utils/EngineerContext"
import AddComment from "../components/AddComment"

function OneCompany() {
  const { deleteComment } = useContext(EngineerContext)
  const { companyId } = useParams()
  const { companies, likeProject, profile, profileCompany } = useContext(EngineerContext)
  if (companies.length === 0) return <h1>Loading...</h1>
  if (!profile && !profileCompany) return <h1>Loading...</h1>
  const company = companies.find(company => company._id === companyId)

  let liked = false
  if (profile) liked = profile.likes.map(like => {})
  // if (profileCompany) liked = profileCompany.likes.map(like => {})

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
          <img
            variant="top"
            src={company.avatar}
            width="100%"
            style={{ borderRadius: "10px", margin: "20px" }}
          />
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
        {company.engineer.map(engineer1 => (
          <Col>
            <>
              <Card style={{ border: "12px", margin: "300px 40px 20px 40px" }}>
                {/* <Link to={`/engineer/${engineer1._id}`}> */}
                <Card.Img
                  variant="top"
                  src={engineer1.photo}
                  style={{ height: "400px", width: "400px", objectFit: "cover" }}
                />
                <Card.Title style={{ margin: "15px" }}>{engineer1.name}</Card.Title>
                {/* </Link> */}
              </Card>
            </>
          </Col>
        ))}
      </Row>

      <Row mx-auto>
        {company.project.map(project1 => (
          <Col>
            <>
              <Card style={{ border: "12px", margin: "300px 40px 20px 40px" }}>
                <Link to={`/project/${project1._id}`}>
                  <Card.Img
                    variant="top"
                    src={project1.photo}
                    style={{ height: "400px", width: "400px", objectFit: "cover" }}
                  />
                  {/* <Link to={`/project/${project1._id}`}></Link> */}
                  <Card.Title style={{ margin: "15px" }}>{project1.title}</Card.Title>
                  <Card.Body></Card.Body>
                </Link>
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

              <span>
                {/* {comment1.owner._id == profile._id ? ( */}
                <Button variant="danger" onClick={() => deleteComment(companyId, comment1._id)}>
                  delete
                </Button>
                {/* ) : null} */}
              </span>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Row>
      <Row>
        <AddComment companyId={company._id} />
      </Row>
    </>
  )
}

export default OneCompany
