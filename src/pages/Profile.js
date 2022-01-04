import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import CompanyItem from "../components/CompanyItem"
import { Link } from "react-router-dom"
import ProjectItem from "../components/ProjectItem"
function Profile() {
  const { profile, companies } = useContext(EngineerContext)
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
          
          <Row>
            <Col>
            <h1>Favourite Projects</h1>
            {profile.likes.map(project => (
              <ProjectItem project={project} key={project._id} />
            ))}
            </Col>
          </Row>
        </Col>
    </>
  )
}

export default Profile
