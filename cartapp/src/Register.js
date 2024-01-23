import { useState } from "react"
import axios from "axios"

export default function Register(){

    // const [uname,setUname]=useState('')
    // const [mno,setMno]=useState(Number())
    // const [email,setEmail]=useState('')
    // const [pass,setPass]=useState('')
    // const [repass,setRepass]=useState('')
    // const url='http://localhost:4000/register'
    // const handleRegister=(e)=>{
    //     e.preventDefault()
    //     const frm={
    //                 name:uname,
    //                 mobile:mno,
    //                 mail:email,
    //                 pass:pass,
    //                 repass:repass
    //             }

    //     axios.post(url,frm).then((res)=>{
    //         console.log(res)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
//     <form onSubmit={(e)=>handleRegister(e)}>
//     <input type="text" value={uname} onChange={(e)=>{setUname(e.target.value)}} />
//     <input type="number" value={mno} min={0} minLength={10} maxLength={10} onChange={(e)=>{setMno(e.target.value)}} />
//     <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//     <input type="password" value={pass}  onChange={(e)=>{setPass(e.target.value)}}/>
//     <input type="password" value={repass}  onChange={(e)=>{setRepass(e.target.value)}}/>
//     <button>Register</button>
// </form>

    return(
        <>
            <form onSubmit={(e)=>handleRegister(e)}>
                <input type="text"  />
                <input type="number"   />
                <input type="email" />
                <input type="password" />
                <input type="password" />
                <button>Register</button>
            </form>
        </>
    )
}