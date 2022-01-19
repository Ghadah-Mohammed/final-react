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
import { FaEdit } from "react-icons/fa"
import { HiUserAdd } from "react-icons/hi"
import { MdOutlinePostAdd } from "react-icons/md"
import { RiDeleteBin5Line } from "react-icons/ri"
import EngineerItem from "../components/EngineerItem"
function ProfileCompany(props) {
  const { offerId } = useParams
  const { offer } = props
  const { profileCompany, companies, company, progressOffer, refusedOffer, cancel, deleteOffer, deleteEngineer } =
    useContext(EngineerContext)
  const [show, setShow] = useState(false)
  const [addshow, setaddshow] = useState(false)
  const [addengshow, setaddengShow] = useState(false)
  // console.log(profileCompany.engineer)
  if (!profileCompany) return <h1>Loading...</h1>
  return (
    <>
      <Row>
        <div className="editProfileCompany">
          <Row>
            <Col>
              <Image
                className="avatarCompany"
                variant="top"
                roundedCircle
                src={profileCompany.avatar}
                width="150px"
                height="150px"
                style={{ borderRadius: "10px", marginTop: "90px" }}
              />
            </Col>
            <h3 >{profileCompany.name}</h3>
            <p>
              {profileCompany.email} <FaEdit onClick={() => setShow(true)} style={{}} />
            </p>
            <div style={{width: "100vw",display:"flex",justifyContent:"center" }}>
              
            <p style={{width: "50%",  wordBreak: "break-word"}} >{profileCompany.description} </p>
            </div>

            <Col>
              {/* variant="info" className="me-2"  */}
              {/* <FaEdit onClick={() => setShow(true)}style={{}} /> */}
              <Button
                style={{ padding: "5px 30px", backgroundColor: "black", border: "none", marginBottom: "10px" }}
                onClick={() => setaddshow(true)}
              >
                <MdOutlinePostAdd style={{ fontSize: "20px" }} /> project{" "}
              </Button>
              <Button
                style={{
                  padding: "5px 30px",
                  backgroundColor: "black",
                  border: "none",
                  marginBottom: "10px",
                  marginLeft: "10px",
                }}
                onClick={() => setaddengShow(true)}
              >
                {" "}
                <HiUserAdd style={{ fontSize: "20px" }} /> engineer{" "}
              </Button>
            </Col>
          </Row>
        </div>

        {/* <Col>
          <Button style={{padding:"5px 30px" ,backgroundColor:"royalblue"}} onClick={() => setaddshow(true)}>Add project </Button>
          <Button onClick={() => setaddengShow(true)}>Add engineer </Button>
          </Col> */}
      </Row>
      <Row>
        <h3 style={{textAlign:"center",padding:"10px",fontWeight:"600"}}>Company projects</h3>
        {profileCompany.project.map(project => (
          <ProjectItem project={project} key={project._id} fromProfile={true} />
        ))}
      </Row>
      <h3 style={{textAlign:"center",padding:"10px",fontWeight:"600"}}>user offers</h3>

      <Row md={4} style={{backgroundColor: `rgba(227, 227, 235, 1)`,height:"60vh"}} >
    
    
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
        {/* </Col> */}
      </Row>
      
      <h3 style={{textAlign:"center",padding:"10px",fontWeight:"600"}}>Engineers</h3>
      
      <Row md={5}>
      {profileCompany.engineer.map(engineer1 => (
        <EngineerItem engineer1={engineer1}/>
          ))}
          </Row>

      <CompanyEditModal show={show} setShow={setShow} company={profileCompany} />
      <ProjectAddModal show={addshow} setShow={setaddshow} />
      <EngineerAddModal show={addengshow} setShow={setaddengShow} />
    </>
  )
}

export default ProfileCompany
