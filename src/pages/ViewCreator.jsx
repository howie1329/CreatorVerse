import { useLocation } from "react-router-dom"


export default function ViewCreator() {
  const location = useLocation()
  const id = location.state.id
  return (
    <div>{id}</div>
  )
}
