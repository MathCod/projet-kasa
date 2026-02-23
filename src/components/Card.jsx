/**
 * @file Gestion des cartes de chaque logement sur la page d'accueil
 * @author Mathias
 */
import { Link } from 'react-router-dom'

/**
 * Composant Card - Affiche une vignette de logement cliquable pour la galerie
 * 
 * @param {Object} props
 * @param {string} props.id - L'identifiant unique du logement (pour le lien)
 * @param {string} props.title - Le titre du logement
 * @param {string} props.cover - URL de l'image de couverture
 * @returns {JSX.Element}
 */

function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      <div className="card__overlay"></div>
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default Card