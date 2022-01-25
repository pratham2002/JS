import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Elements(id){
    return <div>
    <h4>Name: {id.name}<br/>Purpose:{id.purpose}<br/> Status:{id.status} </h4>
     </div>
}

function List_all(){
    const [isLoading,setLoading] = useState(true)
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/users")
        .then(function (e){
            setLoading(false)
            setData(e.data) 
        })
    },[isLoading])
    
    return(
        isLoading?<h4>Fetching...</h4>
        :
        <>
        <h1>
        Claims are
        </h1>
        {data?.map((e)=>{
             return <Elements key={e.id} {...e}/>
        })}
        </>
    )
}

export default List_all