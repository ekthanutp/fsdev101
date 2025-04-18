import { useState, useEffect } from "react";

const MainForm = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Data updated:', data)
  },[data]);

  const handleData = (e) => {
        e.preventDefault();
        if (!name || !salary) {
        alert("กรุณากรอกให้ครบ");
        return;
        }

        const newItem = {
            id: Date.now(),
            name,
            salary,
          };

        setData([...data,newItem])

        setName("");
        setSalary(0);
  };

  return (
    <>
      <label>รายการ</label>
      <input 
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
       />
      <label>ราคา</label>
      <input type="number" 
      value={salary}
      onChange={e => setSalary(Number(e.target.value))}
      />
      <button onClick={handleData}>OK</button>

      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>รายการ</th>
                <th>ราคา</th>
            </tr>
        </thead>
        <tbody>
            {data.map((e)=>(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.salary}</td>
                </tr>
            ))}
        </tbody>
      </table>

      <ul >
        {data.map((a)=>(<li key={a.id}>ID : {a.id} Name : {a.name} - Salary : {a.salary}</li>))}
      </ul>
    </>
  );
};

export default MainForm;
