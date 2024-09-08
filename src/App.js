import React from 'react'
import Quiz from './Component/Quiz'
import Select from './Component/Select'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
 let [select,value] = Select()
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>{select}</>
    },
    {
      path: '/quiz',
      element: <Quiz val={value} />
    },
  ])
  return (
    <div className='bg-gray-700 min-h-screen flex items-center justify-center'>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  )
}

export default App