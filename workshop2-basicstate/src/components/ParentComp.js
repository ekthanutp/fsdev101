import { useEffect, useState } from "react"
import NameInput from './NameInput'
import EmailInput from './EmailInput'
import PhoneInput from './PhoneInput'

const ParentComp = () =>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")

    const handleClear=()=>{
        setName("")
        setEmail("")
        setPhone("")
    }

    useEffect(()=>{
        setName("Mr.White");
        setEmail("react@react.com");
        setPhone("0999999999");
        
    },[])

    return(
        <>
            <NameInput value={name} onChange ={setName} />
            <EmailInput value={email} onChange ={setEmail} />
            <PhoneInput value={phone} onChange ={setPhone} />
            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
            <h3>Phone Number : {phone}</h3>
            <button onClick={handleClear} disabled={!name && !email && !phone}>ล้างค่าทั้งหมด</button>
        </>
    )
}

export default ParentComp