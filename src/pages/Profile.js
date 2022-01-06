import { useContext, useState } from "react"
import { Card, Col, Row, Button } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import CompanyItem from "../components/CompanyItem"
import { Link } from "react-router-dom"
import ProjectItem from "../components/ProjectItem"
import UserEditModal from "../components/UserEditModel"

function Profile() {
  const { profile, companies } = useContext(EngineerContext)
  const [show, setShow] = useState(false)
  if (!profile) return <h1>Loading...</h1>
  return (
    <>
      <Col md="4">
        <img variant="top" src={profile.avatar} width="50%" style={{ borderRadius: "10px", margin: "20px" }} />
      </Col>
      <Col>
        <p>{profile.email}</p>
        <h1>
          {profile.firstName}
          {profile.lastName}
        </h1>
        <Button variant="info" className="me-2" onClick={() => setShow(true)}>
          Edit
        </Button>
        <Row>
          <Col>
            <h1>Favourite Projects</h1>
            {profile.likes.map(project => (
              <ProjectItem project={project} key={project._id} />
            ))}
          </Col>
        </Row>
        <UserEditModal show={show} setShow={setShow} user={profile} />
      </Col>
    </>
  )
}

export default Profile
