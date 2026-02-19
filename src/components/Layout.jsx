import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header />
      <main>
        {/* L'Outlet est l'endroit où les pages vont s'afficher */}
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

export default Layout