import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import dataLogements from "./data/logements.json"
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Error from './pages/Error'

function Loading() {
  return <p>Chargement en cours...</p>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    HydrateFallback: Loading,
    errorElement:<Error />,
    children: [
      {
        index: true,
        element: <Home />,
        // Optionnel ici : loader pour charger les logements de la Home
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
        // On récupère les données AVANT d'afficher la page Housing
        loader: async ({ params }) => {
          const housing = dataLogements.find(h => h.id === params.id);
          
          if (!housing) {
            throw new Response("Not Found", { status: 404 });
          }
          return housing;
        }
      },
      {
        path: "*",
        element: <Error />,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App