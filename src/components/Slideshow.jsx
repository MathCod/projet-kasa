import { useState, useEffect, useCallback } from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

function Slideshow({ pictures }) {
  // On crée un index pour savoir quelle image on regarde
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fonction pour l'image suivante
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }, [pictures.length])

  // Fonction pour l'image précédente
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }, [pictures.length])



// Ajout écouteur de clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        prevSlide()
      }
    }

    // On attache l'événement à la fenêtre
    window.addEventListener('keydown', handleKeyDown)

    // Nettoyage : on retire l'événement quand on change de page
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [nextSlide, prevSlide])



  // Une seule image, on n'affiche ni flèches ni compteur
  const showControls = pictures.length > 1

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt="Logement" className="slideshow__img" />

      {showControls && (
        <>
          <img src={arrowLeft} alt="Précédent" className="slideshow__arrow left" onClick={prevSlide} />
          <img src={arrowRight} alt="Suivant" className="slideshow__arrow right" onClick={nextSlide} />
          <p className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Slideshow