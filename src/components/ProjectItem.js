import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"


import { useContext, useState } from "react"
import EngineerContext from "../Utils/EngineerContext"
import ProjectEditModal from "./ProjectEditModal"
import ProjectDeleteModal from "./ProjectDeleteModal"
function ProjectItem(props) {
  const [editShow, seteditShow] = useState(false)
  const [deleteShow, setdeleteShow] = useState(false)
  const { project, fromProfile } = props
  const { likeProject, profile, projects, profileCompany } = useContext(EngineerContext)
  // if (!profileCompany) return <h1>Loading...</h1>

  if (!project) return <h1>Loading...</h1>

  return (
    <>
      <Card border="light" style={{ maxWidth: "350px", margin: "28px", border: "12px",}} >
        <Link to={`/project/${project._id}`} className="text-black" style={{ textDecorationLine: "none" }}>
          <Card.Img variant="top" src={project.photo} height="220px" className="projectitem" style={{margin:"15px"}}/>
          <Card.Body>
            <Card.Title style={{textDecoration: "none"}}>Name :{project.title}</Card.Title>
            {/* <Card.Text>{project.description}</Card.Text> */}
          </Card.Body>
        </Link>{" "}
        <Col style={{textAlgin:"center",alignItems:"center"}}>
          {fromProfile ? (
            <>
              <Button style={{textAlgin:"center",backgroundColor:"green",border:"none",fontSize:"15px"}} onClick={() => seteditShow(true)}><FaEdit/> Edit </Button>
              <Button style={{border:"none",fontSize:"15px",marginLeft:"5px"}} variant="danger" onClick={() => setdeleteShow(true)}>
                {" "}
               <RiDeleteBin5Line/> Delete
              </Button>
            </>
          ) : null}
          {profile ? (
            <Button 
              style={{ backgroundColor: "white", color: "red" }}
              className="ms-1"
              onClick={() => likeProject(project._id)}
            >
              {profile?.likes.find(like => like._id === project._id) ? 
              <MdFavorite style={{ color: `rgba(190, 64, 26, 0.911)`, fontSize: "40px" }} /> : <MdOutlineFavoriteBorder  style={{ color: "black", fontSize: "40px" }} />}
            </Button>
          ) : null}
        </Col>
      </Card>
      <ProjectEditModal show={editShow} setShow={seteditShow} project={project} />
      <ProjectDeleteModal show={deleteShow} setShow={setdeleteShow} project={project} />
    </>
  )
}

export default ProjectItem
