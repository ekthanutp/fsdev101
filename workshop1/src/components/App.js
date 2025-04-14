import './App.css';
import { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EditEmployee from './EditEmployee';
import EmployeeList from './EmployeeList';
import Header from './Header';
import FilterForm from './FilterForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);

  const [filterCondition, setFilterCondition] = useState({
    type: "", // "less", "more", "eq", "range"
    value: 0,
    min: 0,
    max: 0,
  });

  const addEmployee=(newEmployee)=>{
    setData([...data,newEmployee])
    console.log(data);
    console.log('Data updated:', data)
  }

  const deleteEmployee = (idToDelete)=>{
    const updatedData = data.filter((emp)=> emp.id !== idToDelete);
    setData(updatedData)
  }

  const updateEmployee = (updatedEmployee) => {
    const updatedData = data.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setData(updatedData);
  };

  const filteredData = data.filter((emp) => {
    if (filterCondition.type === "less") return emp.salary < filterCondition.value;
    if (filterCondition.type === "more") return emp.salary >filterCondition.value;
    if (filterCondition.type === "eq") return emp.salary === filterCondition.value;
    if (filterCondition.type === "range") {
      // เช็คว่า min กับ max ไม่ว่าง และเป็นตัวเลข
      if (
        !isNaN(filterCondition.min) &&
        !isNaN(filterCondition.max) &&
        filterCondition.min !== 0 &&
        filterCondition.max !== 0
      ) {
        return (
          emp.salary >= filterCondition.min &&
          emp.salary <= filterCondition.max
        );
      } else {
        // ถ้าไม่ได้กรอก min/max ที่ใช้ได้ ก็ไม่ filter (return true เพื่อแสดงทุกตัว)
        return true;
      }
    }
    
    return true;
  });

  return (
    <div className='container'>
      <Header />
      <EmployeeForm addEmployee={addEmployee} />
      <FilterForm onFilterChange={setFilterCondition} />
      <Routes>
        <Route
          path="/"
          element={<EmployeeList employeeList={filteredData} deleteEmployee={deleteEmployee} />}
        />
        <Route
          path="/edit/:id"
          element={<EditEmployee data={filteredData} updateEmployee={updateEmployee} />}
        />
      </Routes>
    </div>
  );
}

export default App;