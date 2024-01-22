import { useState } from "react"
// import { addcustomer } from "./slices/customslice";
// import { useDispatch } from "react-redux";
import axios from "axios";

export default function CustomerAdd(){
   const [sal,setSal]=useState();
   const [cname,setCname]=useState("") 
   const [age,setAge]=useState()
   const [ide,setIde]=useState(1)


   const addCustomer=()=>{
    
    axios.post('http://localhost:4000/',{name:cname,age:age,salary:sal})
    .then((response)=>{
    console.log(response)
}
    )
    setCname("");
    setAge("");
    setSal("");
    setIde((prevId)=>prevId+1)

}
    return(
        <div className="input">
            <form onSubmit={addCustomer}>
                <input type="text" value={cname} onChange={(e)=>setCname(e.target.value)}/>
                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
                <input type="text" value={sal} onChange={(e)=>setSal(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
        )
}
