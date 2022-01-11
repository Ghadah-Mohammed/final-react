import { Card, } from "react-bootstrap";

function OfferItem(props) {
    const{offer}=props
    
    return ( <>
    <Card >
          <Card.Body>
            <Card.Title>{offer.title}</Card.Title>
            <Card.Text>{offer.description}</Card.Text>
          </Card.Body>  
</Card>
    
    
    </> );
}

export default OfferItem;