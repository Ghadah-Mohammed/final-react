import{useContext}from"react"
import { Col, Row } from "react-bootstrap";
import EngineerContext from "../Utils/EngineerContext";

function oneCompany() {  
    const company=companies.find(company=>company.id === companyId)
    return ( <>
    <Row>
        <Col>
        <img src={company.avatar}/>
        </Col>
        {/* <Col>
        <h1>{company.name}</h1>
        <div>
            {

            }
        </div>
        </Col> */}
    </Row>
    </> )
}

export default oneCompany;