import { useContext, useState } from "react"
import { Card, Col, Row, Button } from "react-bootstrap"
import CompanyEditModal from "../components/CompanyEditModal"
import ProjectAddModal from "../components/ProjectAddModal"
import EngineerContext from "../Utils/EngineerContext"
import ProjectEditModal from "../components/ProjectEditModal"
import ProjectItem from "../components/ProjectItem"
import CompanyItem from "../components/CompanyItem"
import OfferItem from "../components/OfferItem"
import { useParams } from "react-router-dom"
function ProfileCompany(props) {
  const { offerId } = useParams
  const { offer } = props
  const { profileCompany, companies, company, progressOffer, refusedOffer, cancel, deleteOffer } =
    useContext(EngineerContext)
  const [show, setShow] = useState(false)
  const [addshow, setaddshow] = useState(false)
  console.log(profileCompany)
  if (!profileCompany) return <h1>Loading...</h1>
  return (
    <>
      <Col md="4">
        <img variant="top" src={profileCompany.avatar} width="50%" style={{ borderRadius: "10px", margin: "20px" }} />
      </Col>
      <Col>
        <p>{profileCompany.email}</p>
        <h1>{profileCompany.name}</h1>
        <Button variant="info" className="me-2" onClick={() => setShow(true)}>
          Edit Profile
        </Button>
        <Col>
          <Button onClick={() => setaddshow(true)}>Add project </Button>
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
        </Row>{" "}
        <CompanyEditModal show={show} setShow={setShow} company={profileCompany} />
        <ProjectAddModal show={addshow} setShow={setaddshow} />
      </Col>
    </>
  )
}

export default ProfileCompany
