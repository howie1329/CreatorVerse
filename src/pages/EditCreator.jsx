/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { supabase } from "../client"
import { Button, Card, TextField } from "@mui/material"


export default function EditCreator() {
  const location = useLocation()
  const id = location.state.id
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true)

  const nav = useNavigate()

  useEffect(() => {
    const fetchCreator = async () => {
      let {data: creator, error} = await supabase.from("creators").select("*").eq("id",id)
      if (error === null){
        console.log(creator)
        setName(creator[0].name)
        setUrl(creator[0].url)
        setDescription(creator[0].description)
        setImageUrl(creator[0].imageURL)
        setLoading(false)
      }
    }
    fetchCreator()
  }, [])

  const handleCancel = () => {
    nav("/")
  }

  const handleSubmit = async () => {
    const { data, error } = await supabase.from('creators').update({name: name, url: url, description: description, imageURL: imageUrl})
    .eq('id', id)
    .select()

    if (error === null && data != null){
      console.log(data)
      nav("/")
    }
  }

  const Info = () => {
    return (
    <Card className="flex flex-col w-9/12 gap-2 p-2">
    <h2 className="self-center">Edit Creators Infomation</h2>
    <div className="flex flex-col gap-2">
      <TextField label="Name" defaultValue={name} onChange={(e) => setName(e.target.value)}></TextField>
      <TextField label="URL" defaultValue={url} onChange={(e) => setUrl(e.target.value)}></TextField>
      <TextField label="Description" defaultValue={description} onChange={(e) => setDescription(e.target.value)}></TextField>
      <TextField label="Image URL" defaultValue={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></TextField>
    </div>
    <div className="flex self-center gap-4">
    <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
    </Card>
    )
  }

  const Display = () => {
    if (loading) {
      return <p className="text-white">Loading...</p>
    } else {
      return <Info />
    }
  }

  return (
    <>
    <Display />
    </>
  )
}
