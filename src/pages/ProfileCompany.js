import { useContext, useState } from "react"
import { Card, Col, Row, Button } from "react-bootstrap"
import CompanyEditModal from "../components/CompanyEditModal"
import ProjectAddModal from "../components/ProjectAddModal"
import EngineerContext from "../Utils/EngineerContext"
function ProfileCompany() {
  const { profileCompany} = useContext(EngineerContext)
  const [show, setShow] = useState(false)
  const [addshow,setaddshow]=useState(false)

  console.log(profileCompany);
  if (!profileCompany) return <h1>Loading...</h1>
  return (
    <>
      <Col md="4">
        <img variant="top" src={profileCompany.avatar} width="50%" style={{ borderRadius: "10px", margin: "20px" }} />
      </Col>
      <Col>
        <p>{profileCompany.email}</p>
        <h1>
          {profileCompany.name}
        </h1>
        <Button variant="info" className="me-2" onClick={() => setShow(true)}>
          Edit Profile
        </Button>
        <Row><Col>
      <Button onClick={()=>setaddshow(true)}>Add project </Button>
      </Col></Row>
        <CompanyEditModal show={show} setShow={setShow} company={profileCompany} />
        <ProjectAddModal show={addshow} setShow={setaddshow} />
      </Col>
    </>
  )
}

export default ProfileCompany
