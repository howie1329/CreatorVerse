/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect,useState } from 'react'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import { supabase } from './client'

function App() {

  const [creators, setCreators] = useState([])

  const fetchData = async () => {
    let {data: creators, error} = await supabase.from("creators").select("*")
    setCreators(creators)
    console.log(creators)
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className='flex flex-col max-w-screen h-screen justify-center items-center border-black border-2 bg-black'>
      <h1 className="self-center">CreatorVerse</h1>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<ShowCreators creators={creators} handleRefesh={fetchData} />} />
      <Route path = "/addCreator" element = {<AddCreator />} />
      <Route path = "/editCreator" element = {<EditCreator />} />
      <Route path = "/viewCreator" element = {<ViewCreator />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
