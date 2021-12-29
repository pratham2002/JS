import { useEffect, useState } from "react";
import ListItem from "../Components/ListItems";

function Home(){
    const [data,setData] = useState([])
    const [isLoading,setLoading] = useState(true);
    useEffect(()=>(
         fetch('http://localhost:8000/products')
        .then(response => response.json())
        .then(res=>setData(res),setLoading(false))
        .catch(error => console.error('Error:', error))
        ),[]
    )
    return(<>
        <h3>Home</h3>
        {isLoading && <h3>Loading...</h3>}
        {data?.map((e)=>{
            // console.log(e);
            return <ListItem key={e.id} img={e.image} name={e.name} price={e.price} desc={e.description}/>
        })}
    </>
    )
}
export default Home