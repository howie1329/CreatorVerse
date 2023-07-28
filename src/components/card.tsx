interface creator{
  name: string;
  url: string;
  description: string;
  imageUrl: string;
}


function card({name, url, description, imageUrl}: creator) {
  return (
    <div>
        <h2>{name}</h2>
        <a href={url}>{name + "content page"}</a>
        <p>{description}</p>
        <img src={imageUrl} alt={name + "image"} />
    </div>
  )
}

export default card
