/**
 * @file Point d'entrée de l'application, gestion du routage avec React DataRouter
 * @author Mathias
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import dataLogements from "./data/logements.json"
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Error from './pages/Error'

/**
 * Composant de secours affiché pendant le chargement des données
 * @returns {JSX.Element}
 */

function Loading() {
  return <p>Chargement en cours...</p>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    HydrateFallback: Loading, // Evite avertissement dans l'inspecteur
    errorElement:<Error />,
    children: [
      {
        index: true,
        element: <Home />,

        /** @type {function} Loader pour récupérer la liste complète des logements */
        loader: () => {
          return dataLogements
          }
        },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "housing/:id",
        element: <Housing />,

        /**
         * Loader pour la page Logement
         * @param {Object} params - Les paramètres de l'URL
         * @returns {Object} Le logement correspondant à l'ID
         * @throws {Response} 404 si l'ID est introuvable
         */
        loader: async ({ params }) => {
          const housing = dataLogements.find(h => h.id === params.id)
          
          if (!housing) {
            throw new Response("Not Found", { status: 404 })
          }
          return housing
        }
      },
      {
        path: "*",
        element: <Error />,
      }
    ]
  }
])

/**
 * Composant racine de l'application qui injecte le RouterProvider
 * @returns {JSX.Element}
 */

function App() {
  return <RouterProvider router={router} />
}

export default App