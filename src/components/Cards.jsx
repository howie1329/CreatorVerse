/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
//import { Card } from "@mui/material"

function Cards({id, name, url, description, imageUrl}) {
  return (
    <div className="flex flex-col w-3/12 p-4 rounded-2xl border-2 border-black bg-slate-300">
    <Link className="flex flex-col w-full h-full" to="/viewCreator" state={{id: id}}>
      <div className="flex flex-col self-center gap-2 text-center">
        <h2 className="">{name}</h2>
        <a href={url}> <CropOriginalRoundedIcon /> { name + " content page"}</a>
        <p>{description}</p>
        <img className="w-56 h-56" src={imageUrl} alt={name + "image"} />
      </div>
    </Link>
    </div>
  )
}

export default Cards
