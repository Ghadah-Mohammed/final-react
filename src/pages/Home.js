import { Container, Row } from "react-bootstrap"
import AllCompany from "../components/AllCompany"
import CompanyList from "../components/CompanyList"
import Showcase from "../components/Showcase"
import CarouselItem from "../components/CarouselItem"
function Home() {
  return (
    <>
      {/* <CarouselItem /> */}
      <section className="onshowcase">
        <Showcase />
      </section>
      <Container>
        <AllCompany />
        </Container>
    </>
  )
}

export default Home
