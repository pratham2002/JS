import TextField from "@mui/material/TextField";
import  Avatar  from "@mui/material/Avatar";
import  Box  from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import styles from "./Search.Module.css";
import { useState } from "react";
import ListCard from "./ListCard";

function Search(){
    const logo = process.env.REACT_APP_ZOMATO_LOGO  
    const baseUrl = process.env.REACT_APP_BASE_URL;
    // console.log(baseUrl);
    const [state,setState] = useState("");
    const axios =require('axios');
    const [data,setData] = useState([])
    const [isLoading,setLoading] = useState(false)
    // console.log(state);
    const handleSubmit= (e)=>{
        axios.get(baseUrl+state)
        .then((res)=>{
            console.log(res.data.meals);
            setData(res.data.meals)
            setLoading(false);
        })
        .catch((e)=>console.log("ERROR AT RANDOM",e))
        
    }
    return(
        <>
    <Box className={styles.search} style={{display:"flex",gap:"1rem"}}>
        <Avatar src={logo} sx={{height:56,width:56}} alt="Zomato Logo"/>
        <TextField autoFocus onChange={(e)=>setState(e.target.value)} name="query" label="Search For Restaurant " variant="standard"/>
        <Button onClick={handleSubmit} variant="outlined" endIcon={<SearchIcon/>}>Submit</Button>
    </Box>
    <div className={styles.results}>
            {isLoading && <h2>Retreving...</h2>}  
            {data.map((e)=>(
                <ListCard key={e.idMeal} cate={e.strCategory} name={e.strMeal} img={e.strMealThumb} receipe={e.strSource}/>
            ))}
        </div>
    </>
)
}
export default Search;