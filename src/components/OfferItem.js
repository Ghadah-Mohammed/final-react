import { useContext } from "react"
import { Button, Card, Row } from "react-bootstrap"
import EngineerContext from "../Utils/EngineerContext"

function OfferItem(props) {
  const { offer, profile, profileCompany } = props
  const { progressOffer, refusedOffer, deleteOffer, cancel } = useContext(EngineerContext)

  console.log(profile)
  console.log(profileCompany)

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{offer.title}</Card.Title>
          <Card.Text>{offer.description}</Card.Text>
          <Card.Text>{offer.status}</Card.Text>
          {profileCompany ? (
            <>
              {offer.status == "pending" ? (
                <>
                  <Button onClick={() => progressOffer(offer._id)}>progress</Button>
                  <Button onClick={() => refusedOffer(offer._id)}>Refuse</Button>
                </>
              ) : offer.status == "progress" ? (
                <>
                  <Button>completed</Button>
                  <Button onClick={() => deleteOffer(offer._id)}>Delete</Button>
                </>
              ) : offer.status == "cancel" || offer.status == "refused" ? (
                <>
                  <Button onClick={() => deleteOffer(offer._id)}>Delete</Button>
                </>
              ) : null}
            </>
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
    </>
  )
}

export default OfferItem
