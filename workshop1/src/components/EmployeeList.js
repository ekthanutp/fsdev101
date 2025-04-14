import { Link } from "react-router-dom";

const EmployeeList =({employeeList,deleteEmployee}) =>{
    return(
        <div className="handleList">
            <ul>
                {employeeList.map((emp) => (
                    <li key={emp.id}>
                    ID {emp.id} : {emp.name} - {emp.salary}
                    <Link to={`/edit/${emp.id}`}>
                        <button>แก้ไข</button>
                    </Link>
                    <button onClick={()=>deleteEmployee(emp.id)}>ลบ</button>
                    </li>
                    
                ))}
                
            </ul>
        </div>
    )
}

export default EmployeeList 