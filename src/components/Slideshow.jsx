import { useState } from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

function Slideshow({ pictures }) {
  // On crée un index pour savoir quelle image on regarde
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour l'image suivante
  const nextSlide = () => {
    // Si on est à la dernière image, on revient à la première (index 0)
    // Sinon, on fait +1
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
  };

  // Fonction pour l'image précédente
  const prevSlide = () => {
    // Si on est à la première image, on va à la dernière
    // Sinon, on fait -1
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
  };

  // Cas particulier : s'il n'y a qu'une seule image, on n'affiche ni flèches ni compteur
  const showControls = pictures.length > 1;

  return (
    <div className="slideshow">
      {/* L'image actuelle */}
      <img src={pictures[currentIndex]} alt="Logement" className="slideshow__img" />

      {showControls && (
        <>
          <img src={arrowLeft} alt="Précédent" className="slideshow__arrow left" onClick={prevSlide} />
          <img src={arrowRight} alt="Suivant" className="slideshow__arrow right" onClick={nextSlide} />
          {/* Le compteur (ex: 1/5) caché sur mobile souvent, selon la maquette */}
          <p className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Slideshow