import axios from "axios"
import { useState } from "react"
import {v4 as uid} from "uuid";
function Add(){
    const [name,setName] = useState("")
    const [date,setDate] = useState("")
    const [purpose,setPurpose] = useState("")
    const [amount,setAmount] = useState("")
    const [status,setStatus] = useState("Pending")

    const handleSubmit=()=>{
        const data={
            "id":uid(),
            "name":name,
            "date":date,
            "purpose":purpose,
            "amount":amount,
            "status":status
        }
        setName("")
        setAmount("")
        setDate("")
        setPurpose("")
        axios.post(`http://localhost:3001/users`,data)
    }

    return(
        <div>
            <div>
        <label>Name:</label>
        <input type="text" value={name} label="Name" onChange={(e)=>{
            setName(e.target.value)
        }} placeholder="Name"/>
            </div>
            <div>
        <label>Date:</label>
        <input type="date" value={date} label="Name" onChange={(e)=>{
            setDate(e.target.value)
        }} placeholder="Name"/>
            </div>
            <div>
        <label>Purpose:</label>
        <input type="text" value={purpose} label="Name" onChange={(e)=>{
            setPurpose(e.target.value)
        }} placeholder="Name"/>
            </div>
            <div>
        <label>Amount:</label>
        <input type="number" label="Name" value ={amount}onChange={(e)=>{
            setAmount(e.target.value)
        }} placeholder="Name"/>
            </div>
            <div>
                <input type="submit" onClick={handleSubmit}/>
            </div>

        </div>
    )
}

export default Add