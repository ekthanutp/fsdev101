import React,{useState} from "react";

const Counter=()=>{
    const [count,setCount] = useState(0);

    return(
        <div>
            <p>คุณกดปุ่มทั้งหมด {count} ครั้ง</p>
            <button onClick={()=> setCount(count + 1)}>เพิ่ม</button>
        </div>
    )
}

export default Counter