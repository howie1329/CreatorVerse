/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "../components/Card"
import { useEffect, useState } from "react"

export default function ShowCreators({creators}) {
  const [data,setData] = useState([])
  const [display,setDisplay] = useState(false)
  useEffect(() => {
    setData(creators)
    if (data.length == 0){
      setDisplay(false)
    } else if (data.length > 0 ){
      setDisplay(true)
    }

  },[creators, data.length])

  const Item = () => {
    if (display){
      return  (<div>{data && data.map((item) => (<Card key={item.id} name={item.name} url={item.url} description={item.description} imageURL={item.imageURL}/>))}
      </div>)
    } else {
      return (<div>No Creators Yet</div>)
    }
  }
  return (
    <div>
      {<Item />}
    </div>
  )
}
