import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Error from './pages/Error'
import Footer from './components/Footer'

function App() {
  
  return (
    <Router>
        <Header /> {/* Le header sera présent sur toutes les pages */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      <Footer /> {/* Le footer sera présent sur toutes les pages */}
    </Router>
  )
}

export default App