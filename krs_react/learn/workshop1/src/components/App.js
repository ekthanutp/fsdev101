import './App.css';
import { useState } from 'react';
import EmployeeForm from './EmployeeForm';
//import EmployeeList from './EmployeeList';
import Header from './Header';

function App() {
  const [data, setData] = useState([]);

  const addEmployee=(newEmployee)=>{
    setData([...data,newEmployee])
  }

  return (
    <div className='container'>
      <Header />
      <EmployeeForm addEmployee={addEmployee}/>
    </div>
  );
}

export default App;
