import { useContext } from "react"
import { Row } from "react-bootstrap"
import ProjectItem from "./ProjectItem"
import EngineerContext from "../Utils/EngineerContext"

function AllProject() {
  const { projects } = useContext(EngineerContext)
  return (
    <div style={{backgroundColor:"", paddingTop:150, minHeight:"100vh"}}>
      <div>
        <h4>Explor Project</h4>
        {/* <h2>all project</h2> */}

        <Row>
          {projects.map(project => (
            <ProjectItem project={project} key={project._id} />
            ))}
        </Row>
      </div>
    </div>
  )
}

export default AllProject
