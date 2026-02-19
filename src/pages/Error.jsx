import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Error() {
  return (
    <div>
      <Header />
      <div className="error">
        <h1 className="error__title">404</h1>
        <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Error