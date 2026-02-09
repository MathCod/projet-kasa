import { useParams, Navigate } from 'react-router-dom'
import logements from "../data/logements.json"


function Housing() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/error" />
  }

  return (
    <div className="housing">
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      
      
    </div>
  )
}

export default Housing