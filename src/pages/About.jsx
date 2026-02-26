import { useLoaderData } from 'react-router-dom'
import Banner from '../components/Banner'
import AboutImg from '../assets/about-banner.png'
import Collapse from '../components/Collapse'

function About() {
  const aboutContents = useLoaderData()

  return (
    <div className='about'>
      <Banner image={AboutImg} />
      <div className='about__collapses'>

        {aboutContents.map((item) => (
          <Collapse 
            key={item.id} 
            title={item.title} 
            content={item.content} 
          />
        ))}
        
      </div>
    </div>
  )
}

export default About