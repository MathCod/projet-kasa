import Banner from "../components/Banner"
import HomeBanner from "../assets/home-banner.svg"

function Home() {

  return (
    <div className="home">
      <Banner 
        image={HomeBanner} 
        text="Chez vous, partout et ailleurs" />
      {/* Plus tard, on mettra la liste des logements ici */}
    </div>
  )
}

export default Home