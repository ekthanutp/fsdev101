const EmployeeList =({employeeList}) =>{
    return(
        <div className="handleList">
            <ul>
                {employeeList.map((emp) => (
                    <li key={emp.id}>
                    ID {emp.id} : {emp.name} - {emp.salary}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList