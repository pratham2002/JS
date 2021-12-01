import axios from 'axios';
import { useEffect, useState } from 'react';

function GetItems(){
    const [data,setData] = useState([])
    console.log(data,"result");
    function ListCard({name,id,model}){
        return(<div className="app">
            <h2>
            Name={name},ID={id},Model={model}
            </h2>
            </div>)
    }

useEffect(()=>(
    axios.get("http://localhost:3001/cars")
    .then(function (response) {
        setData(response.data)
        // return result;
    })
    .catch(function (error) {
        console.log(error);
    })
    )
    ,[])
    
    
    return(<>
    <h1>Honda-Cars</h1>
        {data.map((user)=>(
            <ListCard name={user.Make_Name} id={user.Model_ID} model={user.Model_Name}/>
        ))}
    </>
    )
}
export {GetItems}