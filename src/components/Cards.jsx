/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { Card } from "@mui/material"

function Cards({id, name, url, description, imageUrl}) {
  return (
    <Card className="flex flex-col border-2 border-red-700 w-3/12 p-4">
    <Link className="flex flex-col w-full h-full" to="/viewCreator" state={{id: id}}>
      <div className="flex flex-col self-center gap-2 text-center">
        <h2>{name}</h2>
        <a href={url}>{name + "content page"}</a>
        <p>{description}</p>
        <img className="w-56 h-56" src={imageUrl} alt={name + "image"} />
      </div>
    </Link>
    </Card>
  )
}

export default Cards
