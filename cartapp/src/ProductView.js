import axios from "axios"
import { useEffect, useState } from "react"

export default function ProductView(){
   const[dt,setDt] =useState([])
    useEffect(()=>{

      setTimeout(()=>{ 
         axios.get("http://localhost:4000/products").then((res)=>{
        setDt(res.data.image)
    }).catch((err)=>{
        console.log(err)
    })
},1000
)
       

  })
    return(
        <>
        <h3>Customer List</h3>
            <ul style={{width:"100px"}}>
                {
            dt.map((val,index)=>{
                const img=`http://localhost:4000/uploads/${val.imgname}`
                    return (
                    <div key={index}>
                        <li key={index+1}>{val.prodname}</li>
                        <img src={img} alt="" />
                    </div>                    )
            })
                }
            </ul>
        </>
    )
}
