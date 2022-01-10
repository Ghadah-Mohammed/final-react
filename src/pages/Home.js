import { Button, Container, Row } from "react-bootstrap"
import AllCompany from "../components/AllCompany"
import CompanyList from "../components/CompanyList"
import Showcase from "../components/Showcase"
import CarouselItem from "../components/CarouselItem"
import { useRef } from "react"
function Home() {
  
  return (
    <>
      {/* <CarouselItem /> */}
      <section className="onshowcase">
     
        <Showcase />
      </section>
     {/* <h5 style={{fontSize:"40px",fontWight:"800",color:"black"}}>__________________________________________________________________________________________</h5> */}
        <AllCompany />
    </>
  )
}

export default Home
