import React from 'react'
import Navbar from './components/components_lite/Navbar'
const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}

export default App
