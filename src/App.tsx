import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthScreen, LandingScreen, LeaderboardScreen } from './screens'
import { AppLayout } from './components'



const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement:<div>Somethinh went wrong</div>,
    children: [
      {
        path: '/',
        element: <LandingScreen/>,
        errorElement:<div>Somethinh went wrong</div>
          },
          {
            path: '/leaderboard',
            element: <LeaderboardScreen/>,
            errorElement:<div>Somethinh went wrong</div>
          },
          {
            path: '/auth',
            element: <AuthScreen/>,
            errorElement:<div>Somethinh went wrong</div>
          }
    ]

  },
  
])


function App() {
  

  return (
    <>
      <RouterProvider router={routerConfig}/>
    </>
  )
}

export default App
