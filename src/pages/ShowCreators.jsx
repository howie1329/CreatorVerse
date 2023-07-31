/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import Card from "../components/Card"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"

export default function ShowCreators({creators}) {
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
      return  (<div>{data && data.map((item) => (<Card key={item.id} id={item.id} name={item.name} url={item.url} description={item.description} imageURL={item.imageURL}/>))}
      </div>)
    } else {
      return (<div>No Creators Yet</div>)
    }
  }
  return (
    <>
      {<DisplayItem />}
      <Button variant="contained" onClick={handleSubmit}>New Creator</Button>
    </>
  )
}
