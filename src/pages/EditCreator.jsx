/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { supabase } from "../client"


export default function EditCreator() {
  const location = useLocation()
  const id = location.state.id
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const nav = useNavigate()

  useEffect(() => {
    const fetchCreator = async () => {
      let {data: creator, error} = await supabase.from("creators").select("*").eq("id",id)
      if (error === null){
        setName(creator.name)
        setUrl(creator.url)
        setDescription(creator.description)
        setImageUrl(creator.imageURL)
      }
    }
    fetchCreator()
  },[])

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

  return (
    <div>
    <h2>Edit Creators Infomation</h2>
    <form>
      <label>
        Name:
        <input defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
      </label>
      <label>
        Url:
      <input defaultValue={url} onChange={(e) => setUrl(e.target.value)}></input>
      </label>
      <label>
        Description:
        <input defaultValue={description} onChange={(e) => setDescription(e.target.value)}></input>
      </label>
      <label>
        Image Url:
        <input defaultValue={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
      </label>
    </form>
    <button onClick={handleCancel}>Cancel</button>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
