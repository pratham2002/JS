import { useEffect, useState } from "react";
import ListItem from "../Components/ListItems";

function Home(){
    const [data,setData] = useState([])
    useEffect(()=>(
         fetch('http://localhost:8000/products')
        .then(response => response.json())
        .then(res=>setData(res))
        .catch(error => console.error('Error:', error))
        ),[]
    )
    return(<>
        <h3>Home</h3>
        {data?.map((e)=>{
            console.log(e);
            return <ListItem key={e.id} img={e.image} name={e.name} price={e.price} desc={e.description}/>
        })}
    </>
    )
}
export default Home