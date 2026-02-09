import Banner from "../components/Banner"
import HomeBanner from "../assets/home-banner.png"
import Card from "../components/Card"
import logements from "../data/logements.json"

function Home() {

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