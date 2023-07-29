/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

function Card({id, name, url, description, imageUrl}) {
  return (
    <Link to="/viewCreator" state={{id: id}}>
      <div>
        <h2>{name}</h2>
        <a href={url}>{name + "content page"}</a>
        <p>{description}</p>
        <img src={imageUrl} alt={name + "image"} />
      </div>
    </Link>
  )
}

export default Card
