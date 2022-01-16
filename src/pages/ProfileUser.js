import { useContext, useState } from "react"
import { Card, Col, Row, Button, Image } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import CompanyItem from "../components/CompanyItem"
import { Link } from "react-router-dom"
import ProjectItem from "../components/ProjectItem"
import UserEditModal from "../components/UserEditModel"
import OfferItem from "../components/OfferItem"
import {FaEdit}from"react-icons/fa"
function ProfileUser() {
  const { profile, companies } = useContext(EngineerContext)
  const [show, setShow] = useState(false)
  if (!profile) return <h1>Loading...</h1>
  return (
    <>
    <Row>
      <div className="profileUser">
      <Col >
        <Image className="avatarUser" variant="top" roundedCircle src={profile.avatar} width="150px" height="150px" style={{ borderRadius: "10px", marginTop: "118px" }} />
      
        <h5>
          {profile.firstName} {profile.lastName}
        </h5>
        <p>{profile.email}    <FaEdit variant="info" className="me-2" onClick={() => setShow(true)}/></p>
      </Col>
      </div>
        </Row>    
         
        <Row>
        <h3 style={{textAlign:"center",marginTop:"15px",marginBottom:"15px" ,fontWeight:"600"}}>Favourite Projects</h3>
            {profile.likes.map(project => (
              <ProjectItem project={project} key={project._id} />
            ))}
         
        </Row>
        <h3 style={{textAlign:"center",padding:"10px",fontWeight:"600"}}>Offers</h3>
        <Row md={4} style={{backgroundColor: `rgba(227, 227, 235, 1)`,height:"60vh"}} >
          
            {profile.offers.map(offer1 => (
              // <ProjectItem project={project} key={project._id} />
              <>
              <OfferItem offer={offer1} profile={profile}  />
              </>
            ))}
          
        </Row>

        <UserEditModal show={show} setShow={setShow} user={profile} />
      
    </>
  )
}

export default ProfileUser
