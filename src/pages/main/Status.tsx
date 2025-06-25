import { useParams } from "react-router"

export function Status(){
  const {id} = useParams();
  return(
    <h1>statausID: {id}</h1>
  )
}