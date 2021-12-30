import { Button, Card } from "react-bootstrap"

function CompanyItem(props) {
  const { company } = props
  return (
    <>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={company.avatar} />
  <Card.Body>
    <Card.Title>{company.name}</Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </>
  )
}

export default CompanyItem
