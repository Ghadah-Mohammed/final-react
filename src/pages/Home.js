import { Container, Row } from "react-bootstrap"
import AllCompany from "../components/AllCompany"
import CompanyList from "../components/CompanyList"
import Showcase from "../components/Showcase"

function Home() {
  return (
    <>
      <Container>
        <Showcase />
        <Row>
          <AllCompany />
        </Row>
      </Container>
    </>
  )
}

export default Home
