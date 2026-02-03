import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  return (
    // Le Link permet d'aller sur la page de ce logement précis
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      <div className="card__overlay"></div>
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default Card