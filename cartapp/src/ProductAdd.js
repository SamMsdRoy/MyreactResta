import axios from "axios"
import { useState } from "react"

export default function ProductAdd(){
        
    const [pname,setPname]=useState("")
    const [price,setPrice]=useState(0)
    const [mrp,setMrp]=useState(0)
    const [desc,setDesc]=useState("")
    const [imgdata,setImgdata]=useState([])
   

    const pAdd=(e)=>{
        e.preventDefault()
        
        const formdata=new FormData()
        formdata.append('pname',pname)
        formdata.append('price',price)
        formdata.append('mrp',mrp)
        formdata.append('descrip',desc)
        formdata.append('file',imgdata)
 
        // console.log(req.files);
    
        
       
       var uri='http://localhost:4000/products'
       
    
       
    axios.post(uri,formdata).then((response)=>{
             console.log(response)
         }).catch((err)=>{
             console.log(err)
         })
        
    // setDesc("")
    // setImgdata()
    // setMrp()
    // setPname("")
    // setPrice()
    }
    return(
        <div>
            <form onSubmit={pAdd} >
                <input type="text" value={pname} onChange={(e)=>{setPname(e.target.value)}}/>
                <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                <input type="number" value={mrp} onChange={(e)=>{setMrp(e.target.value)}}/>
                <textarea name="" id="" cols="10" rows="4" value={desc} onChange={(e)=>{setDesc(e.target.value)}}>

                </textarea>
                <input type="file" onChange={(e)=>{
                    console.log(e.target.files[0])
                    setImgdata(e.target.files[0])}} />
            <button type="submit">ADD</button>
            </form>
        </div>
    )
}