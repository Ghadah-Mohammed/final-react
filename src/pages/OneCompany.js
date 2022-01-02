import { useContext } from "react"
import { Button, Card, Row, Col, Container } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import EngineerContext from "../Utils/EngineerContext"

function OneCompany() {
  const { companyId } = useParams()
  const { companies } = useContext(EngineerContext)
  if (companies.length === 0) return <h1>Loading...</h1>
  const company = companies.find(company => company._id === companyId)
  console.log(company.project)
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
                <Card.Img
                  variant="top"
                  src={project1.photo}
                  style={{ height: "400px", width: "400px", objectFit: "cover" }}
                />
                <Card.Title style={{ margin: "15px" }}>{project1.title}</Card.Title>
                <Card.Body>
                  <Card.Text>Some quick example text to build on</Card.Text>
                </Card.Body>
                <Card.Title style={{ margin: "15px" }}>Comments</Card.Title>{" "}
                <Row>
                  {project1.comment.map(comment1 => (
                    <Col>
                      <p>{comment1.comment} </p>
                    </Col>
                  ))}
                </Row>
              </Card>
            </>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default OneCompany
