import { useContext } from "react"
import { Row } from "react-bootstrap"
import CompanyItem from "./CompanyItem"
import EngineerContext from "../Utils/EngineerContext"
import { Link } from "react-router-dom"

function AllCompany() {
  const { companies } = useContext(EngineerContext)
  return (
    <>
    <div className="header">
    <h1 style={{fontSize:"50px",fontFamily:"-moz-initial"}}>You can send a request to any company to do your project</h1>
    <div className="buttonAllproject">
    <Link className="buttonSeeAllProject" to={`/projects`}>
    <button className="buttonSeeAllProject" style={{borderRadius:"40px",padding:"15px",color:"white",backgroundColor:"black",borderColor:"black" ,textAlign:"center",fontSize:"25px",justifyContent:"center",fontFamily:"inherit" }}>See All Projects</button>
    </Link>
    </div>
    </div>
      <div className="allcompany" style={{ height: "80vh" ,marginTop:"10px",marginLeft:"20px",fontSize:"30px"}}>
        <h4 style={{fontFamily:"-moz-initial",fontSize:"35px"}}>Explor Company</h4>

        <Row md="4" style={{backgroundColor:`rgba(227, 227, 235,1 )`}}>
           
          {companies.map(company => (
            <CompanyItem company={company} key={company._id} />
          ))}
    
        </Row>
      </div>
    </>
  )
}

export default AllCompany
