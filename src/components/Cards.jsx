/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

function Cards({id, name, description, imageURL}) {
  return (
    <div className="flex flex-col w-72 p-4 rounded-2xl border-2 border-black bg-slate-300">
    <Link className="flex flex-col w-full h-full" to="/viewCreator" state={{id: id}}>
      <div className="flex flex-col self-center gap-2 text-center">
        <h2 className="">{name}</h2>
        <p>{description}</p>
        <img className="w-56 h-56" src={imageURL} alt={name + " image"} />
      </div>
    </Link>
    </div>
  )
}

export default Cards
