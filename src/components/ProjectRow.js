// import { Button } from "react-bootstrap"
// import ProjectDeleteModal from "./ProjectDeleteModal"
// import ProjectViewModal from "./ProjectEditModal"

// function ProjectRow() {
//     const [viewShow, setViewShow] = useState(false)
//     const [deleteShow, setDeleteShow] = useState(false)
//     const [editShow, setEditShow] = useState(false)
//     return (
//       <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
//         <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{project._id}</td>
//         <td>{project.title}</td>
//         <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{project.description}</td>
//         <td>
//           <img src={project.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
//         </td>
        
        // <td>
         
//           <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
//             Edit
//           </Button>
//           <Button variant="danger" onClick={() => setDeleteShow(true)}>
//             Delete
//           </Button>
//         </td>
//         <ProjectViewModal show={viewShow} setShow={setViewShow} project={project} />
//         <ProjectDeleteModal show={deleteShow} setShow={setDeleteShow} projectId={project._id} />
//         <ProjectEditModal show={editShow} setShow={setEditShow} project={project} />
//       </tr>
//     )
//   }
  
//   export default ProjectRow