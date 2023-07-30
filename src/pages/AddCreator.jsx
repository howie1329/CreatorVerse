import { useState } from "react"
import { supabase } from "../client"
import { useNavigate } from "react-router-dom"


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
    <div>
      <h2>Add A New Creator</h2>
      <form>
        <label>
          Name: <input onChange={(e) => setName(e.target.value)}></input>
        </label>
        <label>
          Url: <input onChange={(e) => setUrl(e.target.value)}></input>
        </label>
        <label>
          Description: <input onChange={(e) => setDescription(e.target.value)}></input>
        </label>
        <label>
          Image Url: <input onChange={(e) => setImageUrl(e.target.value)}></input>
        </label>
      </form>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleSubmit}>Add Creator</button>
    </div>
  )
}
