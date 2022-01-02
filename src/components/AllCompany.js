import { useContext } from "react"
import { Row } from "react-bootstrap"
import CompanyItem from "./CompanyItem"
import EngineerContext from "../Utils/EngineerContext"

function AllCompany() {
  const { companies } = useContext(EngineerContext)
  return (
    <>
    
      <div className="allcompany  mt-5 " style={{ height: "100vh" }}>
        <h4>Explor Company</h4>
        <h2>all companies</h2>

        <Row>
           
          {companies.map(company => (
            <CompanyItem company={company} key={company._id} />
          ))}
    
        </Row>
      </div>
    </>
  )
}

export default AllCompany
