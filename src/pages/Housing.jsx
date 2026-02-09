import { useParams, Navigate } from 'react-router-dom'
import logements from "../data/logements.json"
import Slideshow from '../components/Slideshow'

function Housing() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/error" />
  }

  return (
    <div className="housing">
      <Slideshow pictures={logement.pictures} />
      <div className="housing__content">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>

      </div>
    </div>
  )
}

export default Housing