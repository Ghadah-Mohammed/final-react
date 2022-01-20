import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"
import { useContext, useState } from "react"
import EngineerContext from "../Utils/EngineerContext"
import ProjectEditModal from "./ProjectEditModal"
import ProjectDeleteModal from "./ProjectDeleteModal"
import { toast } from "react-toastify"
function ProjectItem(props) {
  const [editShow, seteditShow] = useState(false)
  const [deleteShow, setdeleteShow] = useState(false)
  const { project, fromProfile } = props
  const { likeProject, profile, projects, profileCompany } = useContext(EngineerContext)
  // if (!profileCompany) return <h1>Loading...</h1>

  if (!project) return <h1>Loading...</h1>

  return (
    <>
      <Card className="photoProject" border="light" style={{ maxWidth: "350px", margin: "28px" }}>
        <Link to={`/project/${project._id}`} className="text-black" style={{ textDecorationLine: "none" }}>
          <Card.Img style={{ marginTop: "10px" }} src={project.photo[0]} height="220px" className="projectitem" />
          <Card.Body>
            <Card.Title className="projectTitle" style={{ textDecoration: "none" }}>
              {project.title}
            </Card.Title>
            {/* <Card.Text>{project.description}</Card.Text> */}
          </Card.Body>
        </Link>{" "}
        <Col style={{ textAlgin: "center", alignItems: "center" }}>
          {fromProfile ? (
            <>
              <div>
                <Button
                  style={{
                    textAlgin: "center",
                    backgroundColor: "rgb(13, 63, 40)",
                    border: "none",
                    fontSize: "15px",
                    marginBottom: "4px",
                  }}
                  onClick={() => seteditShow(true)}
                >
                  <FaEdit />{" "}
                </Button>
                <Button
                  style={{
                    border: "none",
                    fontSize: "15px",
                    marginLeft: "2px",
                    backgroundColor: "rgb(179, 1, 1)",
                    marginBottom: "4px",
                  }}
                  onClick={() => setdeleteShow(true)}
                >
                  {" "}
                  <RiDeleteBin5Line />
                </Button>
              </div>
            </>
          ) : null}
          {profile ? (
            <Button
              style={{ backgroundColor: "white", fontSize: "px", border: "none" }}
              className="ms-3"
              onClick={() => likeProject(project._id)}
            >
              {profile?.likes.find(like => like._id === project._id) ? (
                <MdFavorite
                  className="MdFavorite"
                  style={{ color: `rgba(190, 64, 26, 0.911)`, fontSize: "40px", border: "none" }}
                />
              ) : (
                <MdFavoriteBorder className="MdFavorite" style={{ color: "black", fontSize: "40px", border: "none" }} />
              )}
            </Button>
          ) : profileCompany ? null : (
            <Button
              style={{ backgroundColor: "white", fontSize: "px", border: "none" }}
              className="ms-3"
              onClick={() => toast.info("login first")}
            >
              <MdFavoriteBorder className="MdFavorite" style={{ color: "black", fontSize: "40px", border: "none" }} />
            </Button>
          )}
          
        </Col>
      </Card>
      <ProjectEditModal show={editShow} setShow={seteditShow} project={project} />
      <ProjectDeleteModal show={deleteShow} setShow={setdeleteShow} project={project} />
    </>
  )
}

export default ProjectItem
