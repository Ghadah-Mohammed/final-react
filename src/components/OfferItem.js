import { useContext } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"
import { AiFillCheckSquare } from "react-icons/ai"
import { RiDeleteBin5Line, RiChatDeleteLine } from "react-icons/ri"
function OfferItem(props) {
  const { offer, profile, profileCompany } = props
  const { progressOffer, refusedOffer, deleteOffer, cancel } = useContext(EngineerContext)

  console.log(profile)
  console.log(profileCompany)
  if (!offer) return null
  return (
    <Col>
      <Card style={{ height: "50vh", marginTop: "5vh", marginLeft: "5px" }}>
        <Card.Body style={{ fontWeight: "700" }}>
          <Card.Title>Title: {offer.title}</Card.Title>
          <Card.Text style={{ maxHeight: 100, overflowY: "scroll" }}> Description: {offer.description}</Card.Text>
          {profileCompany ? <Card.Text> email: {offer.userId.email}</Card.Text> : null}

          <Card.Text> Status : {offer.status}</Card.Text>
          {profileCompany ? (
            <div style={{ position: "absolute", bottom: "2px" }}>
              {offer.status == "pending" ? (
                <>
                  <Button
                    style={{
                      textAlgin: "center",
                      backgroundColor: "rgb(87, 85, 83)",
                      border: "none",
                      fontSize: "15px",
                    }}
                    onClick={() => progressOffer(offer._id)}
                  >
                    {" "}
                    <AiFillCheckSquare />
                    progress
                  </Button>
                  <Button
                    style={{ border: "none", fontSize: "15px", marginLeft: "5px" }}
                    variant="danger"
                    onClick={() => refusedOffer(offer._id)}
                  >
                    {" "}
                    <RiChatDeleteLine />
                    Refuse
                  </Button>
                </>
              ) : offer.status == "progress" ? (
                <>
                  <Button style={{ textAlgin: "center", backgroundColor: "green", border: "none", fontSize: "15px" }}>
                    completed
                  </Button>
                  <Button
                    style={{ border: "none", fontSize: "15px", marginLeft: "5px" }}
                    variant="danger"
                    onClick={() => deleteOffer(offer._id)}
                  >
                    {" "}
                    <RiDeleteBin5Line /> Delete
                  </Button>
                </>
              ) : offer.status == "cancel" || offer.status == "refused" ? (
                <>
                  <Button
                    style={{ border: "none", fontSize: "15px", marginLeft: "5px" }}
                    variant="danger"
                    onClick={() => deleteOffer(offer._id)}
                  >
                    {" "}
                    <RiDeleteBin5Line /> Delete
                  </Button>
                </>
              ) : null}
            </div>
          ) : null}

          {profile ? (
            <>
              {offer.status == "cancel" ? (
                <>
                  <Button onClick={() => deleteOffer(offer._id)}>Delete</Button>
                </>
              ) : null}
            </>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default OfferItem
