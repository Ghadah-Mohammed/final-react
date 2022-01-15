import { useContext, useState } from "react"
import { Card, Col, Row, Button, Image } from "react-bootstrap"
import CompanyEditModal from "../components/CompanyEditModal"
import ProjectAddModal from "../components/ProjectAddModal"
import EngineerContext from "../Utils/EngineerContext"
import ProjectEditModal from "../components/ProjectEditModal"
import ProjectItem from "../components/ProjectItem"
import CompanyItem from "../components/CompanyItem"
import OfferItem from "../components/OfferItem"
import { useParams } from "react-router-dom"
import EngineerAddModal from "../components/EngineerAddModal"
import EngineerDeleteModal from "../components/EngineerDeleteModal"
function ProfileCompany(props) {
  const { offerId } = useParams
  const { offer } = props
  const { profileCompany, companies, company, progressOffer, refusedOffer, cancel, deleteOffer, deleteEngineer } =
    useContext(EngineerContext)
  const [show, setShow] = useState(false)
  const [addshow, setaddshow] = useState(false)
  const [addengshow, setaddengShow] = useState(false)
  const [deleteEngshow, setdeleteEngShow] = useState(false)
  // console.log(profileCompany.engineer)
  if (!profileCompany) return <h1>Loading...</h1>
  return (
    <>
      <Col md="4">
        <Image variant="top" roundedCircle src={profileCompany.avatar} width="100px" height="100px" style={{ borderRadius: "10px", margin: "20px" ,marginTop:"100px"}} />
      </Col>
      <Col>
        <h3>{profileCompany.name}</h3>
        <p>{profileCompany.email}</p>
        <p>{profileCompany.description}</p>
        <Button variant="info" className="me-2" onClick={() => setShow(true)}>
          Edit Profile
        </Button>
        <Col>
          <Button onClick={() => setaddshow(true)}>Add project </Button>
          <Button onClick={() => setaddengShow(true)}>Add engineer </Button>
        </Col>
        <Col></Col>
        <Row>
          {profileCompany.project.map(project => (
            <ProjectItem project={project} key={project._id} fromProfile={true} />
          ))}
        </Row>
        <Row>
          {profileCompany.offer.map(offer1 => (
            <>
              <OfferItem offer={offer1} profileCompany={profileCompany} />

              {/* {offer1.status == "pending" ? (
                <>
                  <Button onClick={() => progressOffer(offer._id)}>progress</Button>
                  <Button onClick={() => refusedOffer(offer._id)}>Refuse</Button>
                </>
              ) : offer.status == "progress" ? (
                <>
                  <Button>completed</Button>
                  <Button onClick={() => cancel(offer._id)}> Cancel </Button>
                </>
              ) : offer.status == "Cancel" || offer.status == "refused" ? (
                <>
                  <Button onClick={() => deleteOffer(offer._id)}>Delete</Button>
                </>
              ) : null}*/}
            </>
          ))}
        </Row>
        <h3>Engineers</h3>
        {profileCompany.engineer.map(engineer1 => (
          <Row>
            <Col>
              <img src={engineer1.photo} height="100px" width="100px" />
              <h3>{engineer1.name}</h3>
              <Button onClick={() => setdeleteEngShow(true)}>Delete engineer</Button>
            </Col>
            <EngineerDeleteModal show={deleteEngshow} setShow={setdeleteEngShow} engineer={engineer1} />
          </Row>
        ))}
      </Col>

      <CompanyEditModal show={show} setShow={setShow} company={profileCompany} />
      <ProjectAddModal show={addshow} setShow={setaddshow} />
      <EngineerAddModal show={addengshow} setShow={setaddengShow} />
    </>
  )
}

export default ProfileCompany
