import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-9xl font-bold text-gray-400">404</div>
      <div className="text-4xl font-bold text-gray-600 text-center">
        Oh no! <span className="text-red-500">Page not found</span>
      </div>
      <div className="text-lg font-medium text-center px-5 text-gray-700">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </div>
      <div className="mt-8">
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go back to home page
        </Link>
      </div>
    </div>
  )
}

export default NotFound