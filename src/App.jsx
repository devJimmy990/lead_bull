// import './App.css'
import { lazy, Suspense } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const AboutScreen = lazy(() => import('./screens/about/about'));
const Home = lazy(() => import('./screens/home/home'));
const Layout = lazy(() => import('./screens/layout'));
function App() {
  const routes = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutScreen /> },
        { path: "services", element: <div>Services</div> },
        { path: "support", element: <div>Support</div> },
        { path: "login", element: <div>Login</div> },
        { path: "signup", element: <div>Signup</div> },
      ],
    },
  ]);
  return (
    <Suspense fallback={<TailSpin color="#00BFFF" height={80} width={80} />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
