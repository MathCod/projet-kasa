import { useState } from 'react'
import arrow from '../assets/arrow.svg'

function Collapse({ title, content }) {
  // On crée un état "ouvert/fermé", par défaut c'est fermé (false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__title">{title}</h2>
        <img 
          src={arrow} 
          alt="ouvrir" 
          className={`collapse__arrow ${isOpen ? 'opened' : ''}`} 
        />
      </div>
      <div className={`collapse__content ${isOpen ? 'opened' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default Collapse