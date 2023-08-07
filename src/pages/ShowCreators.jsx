/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import Cards from "../components/Cards"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"

export default function ShowCreators({creators, handleRefesh}) {
  const [data,setData] = useState([])
  const [display,setDisplay] = useState(false)
  const nav = useNavigate()

  const handleSubmit = () => {
    nav("/addCreator")
  }
  useEffect(() => {
    setData(creators)
    if (data.length == 0){
      setDisplay(false)
    } else if (data.length > 0 ){
      setDisplay(true)
    }

  },[creators, data.length])

  const DisplayItem = () => {
    if (display){
      console.log(data)
      return  (<div className="grid grid-cols-3 gap-2 self-center">{data && data.map((item) => (<Cards key={item.id} id={item.id} name={item.name} description={item.description} imageURL={item.imageURL}/>))}
      </div>)
    } else {
      return (<div>No Creators Yet</div>)
    }
  }
  return (
    <div className="flex flex-col w-screen h-screen gap-2">
      <Button className="self-center" variant="contained" onClick={handleRefesh}>Refresh</Button>
      {<DisplayItem />}
      <Button className="self-center" variant="contained" onClick={handleSubmit}>New Creator</Button>
    </div>
  )
}
