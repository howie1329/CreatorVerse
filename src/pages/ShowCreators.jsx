/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "../components/Card"

export default function ShowCreators({creators}) {
  

  
  return (
    <div>{creators && creators.map((item) => (<Card key={item.id} name={item.name} url={item.url} description={item.description} imageURL={item.imageURL}/>))}
    </div>
  )
}
