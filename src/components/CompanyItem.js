import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function CompanyItem(props) {
  const { company } = props

  return (
    <>
      <Col style={{ display: "flex", justifyContent: "center",marginBottom:"1PX" }}>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <Card border="light" style={{ maxWidth: "350px", margin: "28px", border:"none",  backgroundColor: `rgba(227, 227, 235, 1)` }} className="companyCard">
            <Link to={`/company/${company._id}`} className="text-black" style={{ textDecoration: "none" }}>
              <Card.Img
                variant="top"
                src={company.avatar}
                style={{ borderRadius: "25px", height: "250px", objectFit: "cover", width: "270px",marginTop:"10px" }}
              />
              <Card.Body >
                <Card.Title>{company.name}</Card.Title>
              </Card.Body>
              
            </Link>
          </Card>
        </div>
      </Col>
    </>
  )
}

export default CompanyItem
