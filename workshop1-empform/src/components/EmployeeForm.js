import { useState, useRef, useEffect } from "react";
import "./EmployeeForm.css"; // ลิงก์ไปไฟล์ CSS

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const nameInputRef = useRef();

  const handleSubmit = (e) => {
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
    nameInputRef.current.focus();
  };

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">ชื่อพนักงาน</label>
          <input
            id="name"
            type="text"
            ref={nameInputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary" className="form-label">เงินเดือน</label>
          <input
            id="salary"
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn-submit">เพิ่มข้อมูล</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
