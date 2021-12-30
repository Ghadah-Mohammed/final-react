// import {useContext}from"react"
// import { Card, Col,Row,listTitle } from "react-bootstrap";
// import EngineerContext from "../Utils/EngineerContext";
// function CompanyList(props) {
//     const{listTitle}=props
//     return ( <>
//     <Row>
//         <h4 className="mt-6 mb-4">{listTitle}</h4>
//     </Row>
//     <Row>
//         <Col key={company._id} >
//             <Card border="light" style={{maxWidth:"200px"}}>
//                 <link to={`/company/${company._id}`}>
//                     <Card.Img variant="top" src={company.avatar} height="220px" style={{borderRadius:"10px"}}/>
//                 </link>
//                 <Card.Body>
//                     <link to={`/company/${company._id}`} className="text-black" style={{textDecoration:"none"}}>
//                         <Card.Title>{company.title}</Card.Title>
//                     </link>
//                     <Card.Text className="text-muted" >{FileSystem.description}</Card.Text>
//                 </Card.Body>
//             </Card>
//         </Col>
//     </Row>
//     </> );
// }

// export default CompanyList;