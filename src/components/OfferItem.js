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
      <Card style={{ height: "55vh", marginTop: "3vh", marginLeft: "5px" }}>
        <Card.Body style={{ fontWeight: "700" }}>
          <Card.Text>
            title: <p style={{ color: "rgb(90, 92, 94)" }}>{offer.title}</p>
          </Card.Text>

          <Card.Text style={{ maxHeight: 80, overflowY: "scroll" }}>
            description:<p style={{ color: "rgb(90, 92, 94)" }}>{offer.description}</p>
          </Card.Text>

          {profileCompany ? (
            <Card.Text>
              email:<p style={{ color: "rgb(90, 92, 94)" }}>{offer.userId?.email}</p>
            </Card.Text>
          ) : null}

          <Card.Text>
            {" "}
            Status:<p style={{ color: "rgb(90, 92, 94)" }}>{offer.status}</p>
          </Card.Text>
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
                      marginBottom: "5px",
                    }}
                    onClick={() => progressOffer(offer._id)}
                  >
                    {" "}
                    <AiFillCheckSquare />
                    progress
                  </Button>
                  <Button
                    style={{
                      border: "none",
                      fontSize: "15px",
                      marginLeft: "5px",
                      marginBottom: "5px",
                      backgroundColor: "rgb(179, 1, 1)",
                    }}
                    // variant="danger"

                    onClick={() => refusedOffer(offer._id)}
                  >
                    {" "}
                    <RiChatDeleteLine />
                    Refuse
                  </Button>
                </>
              ) : offer.status == "progress" ? (
                <>
                  <Button
                    style={{
                      textAlgin: "center",
                      backgroundColor: "rgb(13, 63, 40)",
                      border: "none",
                      fontSize: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    completed
                  </Button>
                  <Button
                    style={{
                      border: "none",
                      fontSize: "15px",
                      marginLeft: "5px",
                      marginBottom: "5px",
                      backgroundColor: "rgb(179, 1, 1)",
                    }}
                    // variant="danger"
                    onClick={() => deleteOffer(offer._id)}
                  >
                    {" "}
                    <RiDeleteBin5Line />
                  </Button>
                </>
              ) : offer.status == "cancel" || offer.status == "refused" ? (
                <>
                  <Button
                    style={{
                      border: "none",
                      fontSize: "15px",
                      marginLeft: "100px",
                      marginBottom: "5px",
                      backgroundColor: "rgb(179, 1, 1)",
                    }}
                    variant="danger"
                    onClick={() => deleteOffer(offer._id)}
                  >
                    {" "}
                    <RiDeleteBin5Line />
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
