import React from 'react'
import { Link } from 'react-router-dom'

function Card({haha}) {
  return (
    <Link to={'/single-page/' + haha.id} >
      <div><div className="bg-white rounded-md shadow-md overflow-hidden p-4 max-w-sm">
    <img className="w-full" src={haha.thumbnail} alt="Info card image"  />
    <div className="px-6 py-4">
        <h2 className="text-lg font-bold leading-tight text-gray-900">
            {haha.title} </h2>
        <p className="mt-2 text-gray-600">{haha.description}</p>
    </div>
</div></div>
    </Link>
    
  )
}

export default Card