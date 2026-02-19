import { useLoaderData } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import greyStar from '../assets/star-grey.svg'
import redStar from '../assets/star-red.svg'

function Housing() {
  const logement = useLoaderData()

  const range = [1, 2, 3, 4, 5]

return (
    <div className="housing">
      <Slideshow pictures={logement.pictures} />
      
      <div className="housing__header">
        <div className="housing__title-container">
            <h1 className="housing__title">{logement.title}</h1>
            <p className="housing__location">{logement.location}</p>
          <div className="housing__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing__host-container">
          <div className="housing__host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="housing__rating">
            {range.map((rangeElem) =>
              logement.rating >= rangeElem ? (
                <img key={rangeElem.toString()} src={redStar} alt="étoile rouge" />
              ) : (
                <img key={rangeElem.toString()} src={greyStar} alt="étoile grise" />
              )
            )}
          </div>
        </div>
      </div>

      <div className="housing__details">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={
            <ul>
              {logement.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          } 
        />
      </div>
    </div>
  )
}

export default Housing