import Banner from '../components/Banner'
import AboutImg from '../assets/about-banner.png'

function About() {
  return (
    <div className='about'>
      <Banner image={AboutImg} />
      <div className='about__collapses'>
      
      </div>
    </div>
  )
}

export default About