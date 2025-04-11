const EmployeeList =({employeeList}) =>{
    return(
        <ul>
            {employeeList.map((emp) => (
                <li key={emp.id}>
                ID {emp.id} : {emp.name} - {emp.salary}
                </li>
            ))}
        </ul>
    )
}

export default EmployeeList