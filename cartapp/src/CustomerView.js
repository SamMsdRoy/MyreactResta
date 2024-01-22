import axios from "axios"
import { useEffect, useState } from "react"

export default function CustomerView(){
    const [data,setData]=useState([])
    const [url,setUrl]=useState("")
    useEffect(()=>{
        
       setUrl('http://localhost:4000/')
        setTimeout(()=>{
        
            axios.get('http://localhost:4000/')
            .then((result)=>{
                    setData(result.data.arr)
                    console.log(result.data.arr)
            })
            .catch((err)=>{
                    console.log(err)
            })
        },1000)

    
    },[url])

    return(
    <>
        {data.map((val)=><h6 key={val._id}>{val.name}</h6>)}
        ProductView
    </>
    )
}