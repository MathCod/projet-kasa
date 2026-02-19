import { useLoaderData } from "react-router-dom"
import Banner from "../components/Banner"
import HomeBanner from "../assets/home-banner.png"
import Card from "../components/Card"

function Home() {
  const logements = useLoaderData()

  return (
    <div className="home">
      <Banner image={HomeBanner} text="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {logements.map((logement) => (
          <Card 
            key={logement.id} 
            id={logement.id} 
            title={logement.title} 
            cover={logement.cover}
            />
        ))}
      </section>
    </div>
  )
}

export default Home