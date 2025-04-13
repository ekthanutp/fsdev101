const EmployeeList =({employeeList,deleteEmployee}) =>{
    return(
        <div className="handleList">
            <ul>
                {employeeList.map((emp) => (
                    <li key={emp.id}>
                    ID {emp.id} : {emp.name} - {emp.salary} 
                    <button onClick={()=>deleteEmployee(emp.id)}>ลบ</button>
                    </li>
                    
                ))}
                
            </ul>
        </div>
    )
}

export default EmployeeList