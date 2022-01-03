import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import CompanyItem from "../components/CompanyItem"
function Profile() {
  const { profile, companies} = useContext(EngineerContext)
  if (!profile) return <h1>Loading...</h1>
  return (
    <>
      <Row
        style={{
          backgroundColor: `rgba(50,12,240,0,3)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "center",
          display: "flex",
          alignItems: "flex",
          alignItems: "center",
        }}
      >
        <Col md="4">
          <img variant="top" src={profile.avatar} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col>
          <p>{profile.email}</p>
          <h1>
            {profile.firstName}
            {profile.lastName}
          </h1>
          {/* <p className="text-muted">{}</p> */}
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Favourite projects</h3>
        {profile.like.map(project => (
          <CompanyItem project={project} key={project._id} />
        ))}
      </Row>
    </>
  )
}

export default Profile
