import { useState } from "react";


const EmployeeForm=({addEmployee})=>{
    
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        if (!name || !salary) {
            alert("กรุณากรอกให้ครบ");
            return;
          }

        const newItem = {
            id: Date.now(),
            name,
            salary: parseFloat(salary),
        };
        
        addEmployee(newItem);
        setName("");
        setSalary("");  

    }
    return(
        <div className="handleForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ชื่อพนักงาน</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>เงินเดือน</label>
                    <input type="number" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
                </div>
                <button type="submit">เพิ่มข้อมูล</button>
            </form>
        </div>
    )
}


export default EmployeeForm;