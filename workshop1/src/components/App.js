import './App.css';
import { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import Header from './Header';
import FilterForm from './FilterForm';

function App() {
  const [data, setData] = useState([]);

  const addEmployee=(newEmployee)=>{
    setData([...data,newEmployee])
    console.log(data);
    console.log('Data updated:', data)
  }

  const deleteEmployee = (idToDelete)=>{
    const updatedData = data.filter((emp)=> emp.id !== idToDelete);
    setData(updatedData)
  }

  return (
    <div className='container'>
      <Header />
      <EmployeeForm addEmployee={addEmployee}/>
      <FilterForm />
      <EmployeeList employeeList={data} deleteEmployee={deleteEmployee}/>
    </div>
  );
}

export default App;