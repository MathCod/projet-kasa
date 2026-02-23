/**
 * @file Gestion de la bannière des pages "Accueil" et "À Propos"
 * @author Mathias
 */

/**
 * Composant Banner - Affiche une bannière avec une image de fond et un filtre sombre
 * 
 * @param {Object} props
 * @param {string} props.image - URL de l'image de fond
 * @param {string} [props.text] - (Optionnel) Texte à afficher au centre de la bannière
 * @returns {JSX.Element}
 */

function Banner({ image, text }) {

  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner__img" />
      <div className="banner__overlay"></div>
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  )
}

export default Banner