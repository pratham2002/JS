import { useEffect, useState } from "react";
import ListCard from "./ListCard";

function Random(){
    const axios =require('axios');
    const [data,setData] = useState([])
    const [isLoading,setLoading] = useState(false)
    const url = process.env.REACT_APP_RANDOM
    useEffect(()=>(
        setLoading(true),
        axios.get(url)
        .then((res)=>{
            setData(res.data.meals)
            setLoading(false);
        })
        .catch((e)=>console.log("ERROR AT RANDOM",e))
    ),[])
    return(
        <div>
        <h1>Random Dish</h1>
            {/* {console.log(data)} */}
            {isLoading && <h2>Retreving...</h2>}  
            {data.map((e)=>(
                <ListCard cate={e.strCategory} name={e.strMeal} img={e.strMealThumb} receipe={e.strSource}/>
            ))}
        </div>
    )
}

export default Random;