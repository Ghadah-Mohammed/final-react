import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function CompanyItem(props) {
  const { company } = props
  return (
    <>
      <Card border="light" style={{ maxWidth: "350px", margin: "28px" ,border:"12px" }} className="companyitem">
        <Link to={`/company/${company._id}`} className="text-black" style={{ textDecoration: "none" }}>
          <Card.Img variant="top" src={company.avatar} />
          <Card.Body>
            <Card.Title>{company.name}</Card.Title>
            <Card.Text>{company.description}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </>
  )
}

export default CompanyItem
