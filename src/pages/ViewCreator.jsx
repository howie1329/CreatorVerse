/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { supabase } from "../client"


export default function ViewCreator() {
  const location = useLocation()
  const id = location.state.id
  const [currentCreator, setCreator] = useState([])
  const [display,setDisplay] = useState(false)
  const navigation = useNavigate()

  useEffect(() => {
    const fetchCreator = async () => {
      let {data: creator, error} = await supabase.from("creators").select("*").eq("id",id)
      setCreator(creator)
      if (currentCreator.length === 0){
        setDisplay(false)
      } else {
        setDisplay(true)
        console.log(currentCreator)
      }
      
    }
    fetchCreator()
  },[currentCreator.length])

  const deleteCreator = async () => {
    const {error} = await supabase.from("creators").delete().eq("id",id)
    if (error === null){
      navigation("/")
    }
  }

  const updateCreator = async () => {
    navigation("/editCreator", {state: {id: id}})
  }
  const DisplayItem = () => {
    if (display){
      return(
        <>
        <h2>{currentCreator[0].name}</h2>
        <p>{currentCreator[0].url}</p>
        <p>{currentCreator[0].description}</p>
        <p>{currentCreator[0].imageURL}</p>
        <button onClick={deleteCreator}>Delete</button>
        <button onClick={updateCreator}>Edit</button>
        </>
      )
    } else {
      return <p>Loading...</p>
    }
  }
  return (
    <>
      {<DisplayItem />}
    </>
  )
}
