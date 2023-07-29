/* eslint-disable react/jsx-no-target-blank */
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import { useEffect, useState } from 'react'
import { supabaseClients } from './client'

function App() {
  interface creatortemp {
    id: number
    name: string
    url: string
    description: string
    imageURL:string
  }

  interface all {
    stuff: [creatortemp]
  }

  const [creators, setCreators] = useState<all | undefined>(undefined)

  const fetchData = async () => {
    let {data: creators, error} = await supabaseClients.from("creators").select("*")
    return creators
  }
  useEffect(() => {
    const data = fetchData()
    data.then(setCreators)
    setCreators(data)
  },[])

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<ShowCreators />} />
      <Route path = "/addCreator" element = {<AddCreator />} />
      <Route path = "/editCreator" element = {<EditCreator />} />
      <Route path = "/viewCreator" element = {<ViewCreator />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
