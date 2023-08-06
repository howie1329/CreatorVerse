/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { supabase } from "../client"
import { Button, Card } from "@mui/material"
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';


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
        <Card className="flex flex-col justify-center items-center text-center w-2/6 h-fit gap-2 py-2" >
        <h2>{currentCreator[0].name}</h2>
        <p><CropOriginalRoundedIcon /> {currentCreator[0].url}</p>
        <p>{currentCreator[0].description}</p>
        <p>{currentCreator[0].imageURL}</p>
        <img className="w-56 h-56" src={currentCreator[0].imageURL} alt="Content Creator Image"></img>
        <div className="flex gap-2 ">
        <Button variant="outlined" color="error" onClick={deleteCreator}><DeleteIcon/> Delete</Button>
        <Button variant="contained" onClick={updateCreator}><CreateIcon /> Edit</Button>
        </div>
        </Card>
      )
    } else {
      return <p className="font-bold text-2lx">Loading...</p>
    }
  }
  return (
    <>
    <div className="flex w-2/6 pb-2">
      <Button variant="contained" onClick={(e) => navigation("/")}><ArrowBackIosIcon /></Button>
    </div>
    {<DisplayItem />}
    </>
  )
}
