/* eslint-disable react/prop-types */

function Card({name, url, description, imageUrl}) {
  return (
    <div>
        <h2>{name}</h2>
        <a href={url}>{name + "content page"}</a>
        <p>{description}</p>
        <img src={imageUrl} alt={name + "image"} />
    </div>
  )
}

export default Card
