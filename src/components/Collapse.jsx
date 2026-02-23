/**
 * @file Gestion des accordéons pour les pages "À Propos" et "Logement"
 * @author Mathias
 */

import { useState } from 'react'
import arrow from '../assets/arrow.svg'

/**
 * Composant Collapse - Affiche un élément repliable (accordéon)
 * 
 * @param {Object} props
 * @param {string} props.title - Le titre affiché sur la barre du collapse
 * @param {string|React.ReactNode} props.content - Le contenu (texte ou JSX)
 * @returns {JSX.Element}
 */

function Collapse({ title, content }) {
  // Crée un état "ouvert/fermé" par défaut fermé (false)
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