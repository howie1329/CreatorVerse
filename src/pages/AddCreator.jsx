import { useState } from "react"
import { supabase } from "../client"
import { useNavigate } from "react-router-dom"
import { Button, Card, TextField } from "@mui/material"


export default function AddCreator() {
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const nav = useNavigate()

  const handleSubmit = async () => {
    const creator = {name: name, url: url, description: description, imageURL: imageUrl}
    const { data, error } = await supabase
    .from('creators')
    .insert([creator,])
    .select()

    if (error === null && data != null){
      console.log(data)
      nav("/")
    }

  }

  const handleCancel = () => {
    nav("/")
  }

  return (
    <Card className="flex flex-col w-9/12 gap-2 p-2">
      <h2 className="self-center">Add A New Creator</h2>
      <div className="flex flex-col gap-2">
        <TextField label="Name" onChange={(e) => setName(e.target.value)}></TextField>
        <TextField label="URL" onChange={(e) => setUrl(e.target.value)}></TextField>
        <TextField label="Description" onChange={(e) => setDescription(e.target.value)}></TextField>
        <TextField label="Image URL" onChange={(e) => setImageUrl(e.target.value)}></TextField>
      </div>
      <div className="flex self-center gap-4">
      <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
      <Button variant="contained" onClick={handleSubmit}>Add Creator</Button>
      </div>
    </Card>
  )
}
