import { useContext, useEffect } from "react"
import { Button, Card, Row, Col, Image, Container, ListGroup } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { MdFavorite, MdFavoriteBorder, MdSafetyDivider } from "react-icons/md"
import EngineerContext from "../Utils/EngineerContext"
import AddComment from "../components/AddComment"
import { RiDeleteBinLine } from "react-icons/ri"
import { toast } from "react-toastify"
import ProfileCompany from "./ProfileCompany"
function OneCompany() {
  const { deleteComment, profileCompany } = useContext(EngineerContext)
  const { companyId } = useParams()
  const { companies, likeProject, profile, getProfileCompany, getProjects } = useContext(EngineerContext)
  if (companies.length === 0) return <h1>Loading...</h1>
  const company = companies.find(company => company._id === companyId)

  let liked = false
  if (profile) liked = profile.likes.map(like => {})
  // if (profileCompany) liked = profileCompany.likes.map(like => {})

  console.log(liked)

  return (
    <>
      {/* linear-gradient(rgba(0,0,0,0.8), */}
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.493), rgba(255,255,255, 0.5)), url("${company.avatar}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img
            variant="top"
            src={company.avatar}
            width="80%"
            style={{ borderRadius: "10px", margin: "20px", height: "60vh", objectFit: "cover" }}
          />
        </Col>
        <Col>
          <h1>{company.name}</h1>
          <div>
            <p style={{ fontSize: "15px", color: "black", width: "48vw", wordBreak: "break-word" }}>
              {company.description}
            </p>
          </div>
          {/* className="text-muted"  */}
        </Col>
      </Row>
      {/* <Row>
        {company.project.map(project1=>(

        ))}
      </Row>*/}

      <h2 style={{ margin: "30px", textAlign: "center" }}>Engineers in this company</h2>
      <Row md={7} style={{ display: "flex", justifyContent: "center" }}>
        {company.engineer.map(engineer1 => (
          <Col md={(1, 2)}>
            {/* <> */}
            {/* <Card style={{ border: "12px", margin: "300px 40px 20px 40px" }}> */}
            {/* <Link to={`/engineer/${engineer1._id}`}> */}
            <Image
              //  variant="top"
              src={engineer1.photo}
              width="80px"
              height="80px"
              roundedCircle
              // style={{ height: "400px", width: "400px", objectFit: "cover" }}
            />
            <h6 style={{ margin: "8px" }}> {engineer1.name}</h6>
            {/* </Link> */}
            {/* </Card> */}
            {/* </> */}
          </Col>
        ))}
      </Row>
      <h2 style={{ margin: "30px", textAlign: "center" }}>Projects that have been worked on</h2>
      <Row md={3}>
        {company.project.map(project1 => (
          <Col>
            <>
              <Card style={{ border: "12px", margin: "20px 40px 20px 40px" }}>
                <Link className="linkOneCompany" to={`/project/${project1._id}`} style={{ textDecoration: "none" }}>
                  <Card.Img
                    variant="top"
                    src={project1.photo[0]}
                    style={{ height: "280px", width: "300px", objectFit: "cover" }}
                    width="80px"
                    roundedCircle
                    className="projectitem"
                  />

                  <Card.Title className="projectTitle2" style={{ margin: "15px" }}>
                    {project1.title}
                  </Card.Title>
                </Link>
              </Card>
              <Col style={{ margin: "0px 30px" }}>
                {profile ? (
                  <Button
                    style={{ backgroundColor: "white", fontSize: "px", border: "none" }}
                    className="ms-3"
                    onClick={() => likeProject(project1._id)}
                  >
                    {profile?.likes.find(like => like._id === project1._id) ? (
                      <MdFavorite
                        className="MdFavorite"
                        style={{ color: `rgba(190, 64, 26, 0.911)`, fontSize: "40px", border: "none" }}
                      />
                    ) : (
                      <MdFavoriteBorder
                        className="MdFavorite"
                        style={{ color: "black", fontSize: "40px", border: "none" }}
                      />
                    )}
                  </Button>
                ) : profileCompany ? null : (
                  <Button
                    style={{ backgroundColor: "white", fontSize: "px", border: "none" }}
                    className="ms-3"
                    onClick={() => toast.info("login first")}
                  >
                    <MdFavoriteBorder
                      className="MdFavorite"
                      style={{ color: "black", fontSize: "40px", border: "none" }}
                    />
                  </Button>
                )}
              </Col>
            </>
          </Col>
        ))}
      </Row>

      <Row style={{ width: "800px" }}>
        <h2 style={{ margin: "80px 30px 20px " }}>Comments:</h2>
        {company.comment.map(comment1 => (
          <ListGroup>
            <ListGroup.Item style={{ marginLeft: "40px" }}>
              <Col>
                {" "}
                <Image
                  style={{ marginRight: "15px" }}
                  src={comment1.owner.avatar}
                  width="50px"
                  height="50px"
                  roundedCircle
                />
                <span> {comment1.comment}</span>
              </Col>
              <strong style={{ paddingLeft: "5px" }}>{comment1.owner.firstName}</strong>

              <span>
                {comment1.owner?._id == profile?._id ? (
                  <Button
                    variant="danger"
                    onClick={() => deleteComment(companyId, comment1._id)}
                    style={{ marginLeft: "20px" }}
                  >
                    <RiDeleteBinLine />
                  </Button>
                ) : null}
              </span>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Row>
      {profile ? (
        <>
          <Row>
            <AddComment companyId={company._id} />
          </Row>
        </>
      ) : null}
    </>
  )
}

export default OneCompany
